import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Go-to-Market Lead Research", description: "Find and organize target accounts and decision makers for focused go-to-market campaigns.", alternates: { canonical: "/services/gtm-leads" } };
export default function Page() { return <ServiceDetail {...services["gtm-leads"]} />; }
