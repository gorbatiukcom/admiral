import { sendGTMEvent } from "@next/third-parties/google";

import { ANALYTICS_EVENTS, AnalyticsEventType } from "./analytics-types";
import { MixpanelEventType, mixpanelTrackEvent } from "./mixpanel";

export { ANALYTICS_EVENTS };

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
