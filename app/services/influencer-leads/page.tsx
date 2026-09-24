import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "Influencer & Creator Research", description: "Build researched influencer and creator contact lists aligned with your campaign requirements.", alternates: { canonical: "/services/influencer-leads" } };
export default function Page() { return <ServiceDetail {...services["influencer-leads"]} />; }
