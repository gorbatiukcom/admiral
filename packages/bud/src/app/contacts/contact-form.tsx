"use client";

import { Forminit } from "forminit";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import design from "../../components/redesign/design.module.css";
import { Arrow } from "../../components/redesign/ui";
import { trackEvent } from "../../constants/analytics";
import { propertyOptions, regions, serviceOptions } from "../../constants/contact";
import styles from "./contacts.module.css";

type Inputs = {
  propertyType: string;
  name: string;
  region: string;
  city: string;
  phone: string;
  email: string;
  area: number;
  message: string;
};
const forminit = new Forminit({ proxyUrl: "/api/forminit" });
const formId = "ozd5cgbno8n";

function Field({
  name,
  label,
  error,
  optional,
  wide,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  optional?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.field} ${wide ? styles.wide : ""}`}>
      <label htmlFor={name}>
        {label}
        {optional && <span> opcjonalnie</span>}
      </label>
      {children}
      {error && (
        <p className={styles.error} id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({
  initialService = "",
  initialPackage = "",
}: {
  initialService?: string;
  initialPackage?: string;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      propertyType: "",
      name: "",
      region: "",
      city: "",
      phone: "",
      email: "",
      message: "",
    },
    shouldUnregister: false,
  });
  const region = watch("region");
  const [review, setReview] = useState<Inputs | null>(null);
  const [sending, setSending] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const inFlight = useRef(false);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const packageName = initialService === "projektowanie" ? initialPackage : "";
  const serviceLabel = serviceOptions.find((item) => item.value === initialService)?.label || "";
  const regionInfo = regions.find((item) => item.value === region);

  useEffect(() => {
    if (review) reviewHeading.current?.focus();
  }, [review]);

  function inputA11y(name: keyof Inputs) {
    return {
      "aria-invalid": !!errors[name],
      "aria-required": name !== "message",
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };
  }
  function toReview(data: Inputs) {
    setSubmissionError("");
    setReview(data);
  }
  function edit() {
    setReview(null);
    setSubmissionError("");
    requestAnimationFrame(() => document.getElementById("propertyType")?.focus());
  }
  async function send() {
    if (!review || inFlight.current) return;
    inFlight.current = true;
    setSending(true);
    setSubmissionError("");
    let delivered = false;
    try {
      const propertyLabel =
        propertyOptions.find((item) => item.value === review.propertyType)?.label ||
        review.propertyType;
      const regionLabel =
        regions.find((item) => item.value === review.region)?.label || review.region;
      const result = await forminit.submit(formId, {
        blocks: [
          {
            type: "sender",
            properties: {
              fullName: review.name,
              email: review.email,
              phone: review.phone,
              city: review.city,
            },
          },
          { type: "text", name: "phone", value: review.phone },
          { type: "text", name: "propertyType", value: propertyLabel },
          { type: "text", name: "service", value: serviceLabel || "Do ustalenia" },
          { type: "text", name: "project", value: packageName || serviceLabel || propertyLabel },
          { type: "text", name: "region", value: regionLabel },
          { type: "text", name: "city", value: review.city },
          { type: "number", name: "projectSize", value: review.area },
          { type: "text", name: "message", value: review.message || "" },
        ],
      });
      if (result.error || !result.data) {
        trackEvent({
          name: "error",
          sendTo: ["mixpanel"],
          props: { errorName: "contactFormError", code: result.error?.code },
        });
        setSubmissionError(
          "Nie udało się wysłać wiadomości. Twoje dane są zachowane — spróbuj ponownie lub zadzwoń: +48 794 510 151.",
        );
        return;
      }
      trackEvent({
        name: "contactForm",
        sendTo: ["mixpanel", "gtm"],
        props: {
          email: review.email,
          phone: review.phone,
          service: serviceLabel || undefined,
          propertyType: propertyLabel,
          package: packageName || undefined,
        },
      });
      delivered = true;
      router.push("/contacts/confirmation");
    } catch {
      trackEvent({ name: "error", sendTo: ["mixpanel"], props: { errorName: "contactFormError" } });
      setSubmissionError(
        "Nie udało się połączyć. Sprawdź połączenie z internetem i spróbuj ponownie. Twoje dane są zachowane.",
      );
    } finally {
      if (!delivered) {
        inFlight.current = false;
        setSending(false);
      }
    }
  }

  if (review) {
    const rows = [
      [
        "Potrzebuję",
        propertyOptions.find((item) => item.value === review.propertyType)?.label ||
          review.propertyType,
      ],
      ...(serviceLabel ? [["Usługa", serviceLabel]] : []),
      ...(packageName ? [["Pakiet", packageName]] : []),
      ["Twoje imię", review.name],
      ["Województwo", regions.find((item) => item.value === review.region)?.label || review.region],
      ["Miasto", review.city],
      ["Telefon", review.phone],
      ["E-mail", review.email],
      ["Powierzchnia", `${review.area} m²`],
      ...(review.message ? [["Kilka słów o planach", review.message]] : []),
    ];
    return (
      <section className={styles.panel} aria-labelledby="review-heading">
        <h2 className={styles.panelTitle} id="review-heading" tabIndex={-1} ref={reviewHeading}>
          Sprawdź swoje zgłoszenie.
        </h2>
        <p className={styles.panelNote}>
          Sprawdź dane i wyślij wiadomość. Skontaktujemy się z Tobą, aby omówić szczegóły.
        </p>
        <dl className={styles.review}>
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {submissionError && (
          <p className={styles.formError} role="alert">
            {submissionError}
          </p>
        )}
        <button
          type="button"
          className={`${design.button} ${styles.submit}`}
          onClick={send}
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? "Wysyłanie…" : "Wyślij wiadomość"}
          <Arrow />
        </button>
        <button
          type="button"
          className={`${design.textLink} ${styles.edit}`}
          onClick={edit}
          disabled={sending}
        >
          ← Popraw dane
        </button>
      </section>
    );
  }

  return (
    <section className={styles.panel} aria-labelledby="contact-form-heading">
      <h2 className={styles.panelTitle} id="contact-form-heading">
        Opowiedz nam o swoich planach
      </h2>
      <p className={styles.panelNote}>
        Wypełnij formularz — skontaktujemy się z Tobą, aby omówić szczegóły.
      </p>
      <form
        noValidate
        onSubmit={handleSubmit(toReview, () =>
          trackEvent({ name: "contactFormInvalid", sendTo: ["mixpanel", "gtm"] }),
        )}
      >
        <div className={styles.fields}>
          <Field name="propertyType" label="Potrzebuję" error={errors.propertyType?.message} wide>
            <select
              id="propertyType"
              {...inputA11y("propertyType")}
              {...register("propertyType", {
                required: "Wybierz rodzaj nieruchomości.",
                validate: (value) =>
                  propertyOptions.some((item) => item.value === value) ||
                  "Wybierz rodzaj nieruchomości.",
              })}
            >
              <option value="">Wybierz zakres</option>
              {propertyOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            {serviceLabel && (
              <p className={styles.packageNote}>
                Wybrana usługa: {serviceLabel}
                {packageName ? ` · Pakiet ${packageName}` : ""}
              </p>
            )}
          </Field>
          <Field name="name" label="Twoje imię" error={errors.name?.message} wide>
            <input
              id="name"
              autoComplete="given-name"
              placeholder="Jak się do Ciebie zwracać?"
              maxLength={120}
              {...inputA11y("name")}
              {...register("name", {
                required: "Podaj swoje imię.",
                setValueAs: (value) => value.trim(),
                validate: (value) => !!value || "Podaj swoje imię.",
              })}
            />
          </Field>
          <Field name="region" label="Województwo" error={errors.region?.message}>
            <select
              id="region"
              autoComplete="address-level1"
              {...inputA11y("region")}
              {...register("region", {
                required: "Wybierz województwo.",
                onChange: () => setValue("city", ""),
                validate: (value) =>
                  regions.some((item) => item.value === value) || "Wybierz województwo.",
              })}
            >
              <option value="">Wybierz województwo</option>
              {regions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
          <Field name="city" label="Miasto" error={errors.city?.message}>
            <input
              id="city"
              autoComplete="address-level2"
              list="city-suggestions"
              placeholder="Wybierz lub wpisz miasto"
              maxLength={120}
              {...inputA11y("city")}
              {...register("city", {
                required: "Podaj miejscowość.",
                setValueAs: (value) => value.trim(),
                validate: (value) => !!value || "Podaj miejscowość.",
              })}
            />
            <datalist id="city-suggestions">
              {regionInfo?.cities.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </Field>
          <Field name="phone" label="Telefon" error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+48 000 000 000"
              maxLength={30}
              {...inputA11y("phone")}
              {...register("phone", {
                required: "Podaj numer telefonu.",
                setValueAs: (value) => value.trim(),
                validate: (value) =>
                  (/^[+()0-9\s.-]+$/.test(value) &&
                    value.replace(/\D/g, "").length >= 7 &&
                    value.replace(/\D/g, "").length <= 15) ||
                  "Podaj prawidłowy numer telefonu.",
                onBlur: (event) => {
                  if (event.target.value)
                    trackEvent({
                      name: "phoneChange",
                      sendTo: ["mixpanel"],
                      props: { phone: event.target.value },
                    });
                },
              })}
            />
          </Field>
          <Field name="email" label="E-mail" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="twoj@email.pl"
              maxLength={254}
              {...inputA11y("email")}
              {...register("email", {
                required: "Podaj adres e-mail.",
                setValueAs: (value) => value.trim(),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Podaj prawidłowy adres e-mail.",
                },
                onBlur: (event) => {
                  if (event.target.value)
                    trackEvent({
                      name: "emailChange",
                      sendTo: ["mixpanel"],
                      props: { email: event.target.value },
                    });
                },
              })}
            />
          </Field>
          <Field name="area" label="Powierzchnia (m²)" error={errors.area?.message} wide>
            <input
              id="area"
              type="number"
              inputMode="decimal"
              min="0.1"
              step="any"
              placeholder="Np. 75"
              {...inputA11y("area")}
              {...register("area", {
                required: "Podaj powierzchnię obiektu.",
                valueAsNumber: true,
                min: { value: 0.1, message: "Powierzchnia musi być większa od zera." },
                validate: (value) => Number.isFinite(value) || "Podaj prawidłową powierzchnię.",
              })}
            />
          </Field>
          <Field
            name="message"
            label="Kilka słów o planach"
            error={errors.message?.message}
            optional
            wide
          >
            <textarea
              id="message"
              rows={4}
              placeholder="Co chcesz zmienić? Na jakim etapie jesteś?"
              maxLength={5000}
              {...inputA11y("message")}
              {...register("message", {
                maxLength: { value: 5000, message: "Wiadomość może mieć maksymalnie 5000 znaków." },
              })}
            />
          </Field>
        </div>
        <button className={`${design.button} ${styles.submit}`} type="submit">
          Zobacz podsumowanie
          <Arrow />
        </button>
        <p className={styles.submitNote}>
          Przed wysłaniem zobaczysz podsumowanie i będziesz mieć możliwość poprawienia danych.
        </p>
      </form>
    </section>
  );
}
