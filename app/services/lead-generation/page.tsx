import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "B2B Lead Generation", description: "Generate researched B2B prospect lists with target accounts and verified decision maker contacts.", alternates: { canonical: "/services/lead-generation" } };
export default function Page() { return <ServiceDetail {...services["lead-generation"]} />; }
