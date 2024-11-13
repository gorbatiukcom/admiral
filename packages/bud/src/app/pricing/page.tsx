import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Budcor | Pricing",
};

const PricingPage: any = dynamic(() => import("./pricing"), {
  ssr: false,
});

export default PricingPage;
