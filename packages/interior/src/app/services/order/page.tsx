import { Metadata } from "next";
import { Suspense } from "react";

import Order from "./order";

export const metadata: Metadata = {
  title: "Admiral Interior | Wycena",
};

export default function OrderPage() {
  return (
    <Suspense fallback={null}>
      <Order />
    </Suspense>
  );
}
