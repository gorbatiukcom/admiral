export const fbPixelTrackPageview = () => {
  try {
    if ((window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  } catch (e) {
    console.log(e);
  }
};

export const fbPixelTrackEvent = (name: string, options: any = {}) => {
  try {
    if ((window as any).fbq) {
      (window as any).fbq("track", name, options);
    }
  } catch (e) {
    console.log(e);
  }
};
