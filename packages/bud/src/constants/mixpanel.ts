import { ANALYTICS_EVENTS } from "./analytics";

type MixpanelEventType = keyof typeof ANALYTICS_EVENTS;

export const mixpanelTrackEvent = (event_name: MixpanelEventType, props?: any) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track(event_name, props);
    }
  } catch (e) {
    console.log(e);
  }
};

export const mixpanelTrackPageview = (props?: any) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track_pageview(props);
    }
  } catch (e) {
    console.log(e);
  }
};

export const mixpanelIdentify = (id: string | number) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.identify(id);
    }
  } catch (e) {
    console.log(e);
  }
};

export const mixpanelSetProfileProp = (name: string, value: any) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.people.set({ [name]: value });
    }
  } catch (e) {
    console.log(e);
  }
};
