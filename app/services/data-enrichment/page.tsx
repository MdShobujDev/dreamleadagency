import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Data Enrichment" };
export default function Page() { return <ServiceDetail {...services["data-enrichment"]} />; }
