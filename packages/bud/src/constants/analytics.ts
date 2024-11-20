import { sendGTMEvent } from "@next/third-parties/google";

import { mixpanelTrackEvent } from "./mixpanel";

export enum ANALYTICS_EVENTS {
  "serviceContactForm" = "serviceContactForm",
  "serviceContactFormInvalid" = "serviceContactFormInvalid",
  "contactForm" = "contactForm",
  "contactFormInvalid" = "contactFormInvalid",
  "error" = "error",
  "emailChange" = "emailChange",
  "phoneChange" = "phoneChange",
}

type AnalyticsEventType = keyof typeof ANALYTICS_EVENTS;

type SendTo = "mixpanel" | "gtm";

export const trackEvent = ({
  name,
  props,
  sendTo,
}: {
  name: AnalyticsEventType;
  props?: any;
  sendTo: SendTo[];
}) => {
  try {
    if (sendTo.includes("mixpanel")) {
      mixpanelTrackEvent(name, props);
    }
    if (sendTo.includes("gtm")) {
      sendGTMEvent({
        event: name,
        ...props,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
