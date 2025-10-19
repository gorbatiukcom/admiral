"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { fbPixelTrackPageview } from "../constants/fbpixel";
import { mixpanelTrackPageview } from "../constants/mixpanel";
import { theme } from "./theme";

const GTM_ID = "GTM-PFKBPV5K";

export const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = useRef("");

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (currentUrl.current !== url) {
      currentUrl.current = url;
      // Mixpanel rounting events
      //Send track event when new pages is loaded
      mixpanelTrackPageview();
      fbPixelTrackPageview();
    }
  }, [pathname, searchParams]);

  return null;
};

export function Providers({ children, isProd }: { children: React.ReactNode; isProd: boolean }) {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      {isProd ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <NavigationEvents />
    </>
  );
}
