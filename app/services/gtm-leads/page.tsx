import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "GTM Lead Systems" };
export default function Page() { return <ServiceDetail {...services["gtm-leads"]} />; }
