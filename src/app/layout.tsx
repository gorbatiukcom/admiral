import { ColorModeScript } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Viewport } from "next";

import { Header } from "@/components/header/header";

import { fonts } from "./fonts";
import { Providers } from "./providers";
import { theme } from "./theme";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Admiral Interior",
  description: "Admiral Interior",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={fonts.oswald.className}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header>{children}</Header>
        </Providers>
      </body>
    </html>
  );
}
