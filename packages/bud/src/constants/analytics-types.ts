export enum ANALYTICS_EVENTS {
  "serviceContactForm" = "serviceContactForm",
  "serviceContactFormInvalid" = "serviceContactFormInvalid",
  "contactForm" = "contactForm",
  "contactFormInvalid" = "contactFormInvalid",
  "error" = "error",
  "emailChange" = "emailChange",
  "phoneChange" = "phoneChange",
}

export type AnalyticsEventType = keyof typeof ANALYTICS_EVENTS;
