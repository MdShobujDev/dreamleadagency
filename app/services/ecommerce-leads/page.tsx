import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Ecommerce Leads" };
export default function Page() { return <ServiceDetail {...services["ecommerce-leads"]} />; }
