import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Influencer & Creator Research" };
export default function Page() { return <ServiceDetail {...services["influencer-leads"]} />; }
