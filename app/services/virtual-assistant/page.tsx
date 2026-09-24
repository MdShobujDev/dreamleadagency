import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Sales Operations Virtual Assistance", description: "Get practical virtual assistant support for prospect research, list building, and sales operations.", alternates: { canonical: "/services/virtual-assistant" } };
export default function Page() { return <ServiceDetail {...services["virtual-assistant"]} />; }
