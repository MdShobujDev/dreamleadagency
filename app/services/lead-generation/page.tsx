import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "B2B Lead Generation" };
export default function Page() { return <ServiceDetail {...services["lead-generation"]} />; }
