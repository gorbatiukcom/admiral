"use client";

import dynamic from "next/dynamic";

const QrCode = dynamic(() => import("./qr"), {
  ssr: false,
});

export default QrCode;
