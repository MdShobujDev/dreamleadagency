import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/service-content";
export const metadata = { title: "B2B Email List Building", description: "Build targeted B2B email lists researched around your ideal customer profile and market.", alternates: { canonical: "/services/email-list-building" } };
export default function Page() { return <ServiceDetail {...services["email-list-building"]} />; }
