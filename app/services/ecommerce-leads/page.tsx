import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Ecommerce Prospect Lists", description: "Research ecommerce businesses and relevant decision makers for your sales and marketing campaigns.", alternates: { canonical: "/services/ecommerce-leads" } };
export default function Page() { return <ServiceDetail {...services["ecommerce-leads"]} />; }
