import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Manual Prospect List Building" };
export default function Page() { return <ServiceDetail {...services["manual-prospect-list"]} />; }
