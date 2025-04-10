import Hero from "@/components/hero";
import ServiceHighlights from "@/components/service-highlights";
import ContactCTA from "@/components/contact-cta";
import ServiceList from "@/components/service-list";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactCTA />
      <ServiceHighlights />
      <ServiceList />
    </div>
  );
}
