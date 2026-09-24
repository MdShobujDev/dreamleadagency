import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Manual Prospect List Building", description: "Get manually researched B2B prospect lists tailored to your ideal customer profile.", alternates: { canonical: "/services/manual-prospect-list" } };
export default function Page() { return <ServiceDetail {...services["manual-prospect-list"]} />; }
