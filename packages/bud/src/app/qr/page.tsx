import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Budcor | QR",
};

const QrCode: any = dynamic(() => import("./qr"), {
  ssr: false,
});

export default QrCode;
