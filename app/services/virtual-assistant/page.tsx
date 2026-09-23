import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Sales Operations Virtual Assistance" };
export default function Page() { return <ServiceDetail {...services["virtual-assistant"]} />; }
