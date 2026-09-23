import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Email List Building" };
export default function Page() { return <ServiceDetail {...services["email-list-building"]} />; }
