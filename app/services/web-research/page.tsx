import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "B2B Web Research", description: "Get accurate web research on companies, markets, contacts, and other sales intelligence needs.", alternates: { canonical: "/services/web-research" } };
export default function Page() { return <ServiceDetail {...services["web-research"]} />; }
