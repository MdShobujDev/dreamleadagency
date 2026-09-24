import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "B2B Data Enrichment", description: "Improve prospect records with verified company details, contact information, and useful sales context.", alternates: { canonical: "/services/data-enrichment" } };
export default function Page() { return <ServiceDetail {...services["data-enrichment"]} />; }
