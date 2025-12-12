import { Metadata } from "next";
import { Suspense } from "react";

import Order from "./order";

export const metadata: Metadata = {
  title: "Budcor | Wycena",
};

export default function OrderPage() {
  return (
    <Suspense>
      <Order />
    </Suspense>
  );
}
