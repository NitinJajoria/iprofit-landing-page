import PricingBackground from "@/app/components/Pricing/PricingBackground";
import ContactHero from "@/app/components/Contact/ContactHero";
import ContactInfo from "@/app/components/Contact/ContactInfo";

export default function ContactPage() {
	return (
		<main className="relative min-h-screen overflow-x-hidden">
			{/* Background Layer */}
			<div className="absolute inset-0 bg-white -z-20" />
			<PricingBackground />

			<div className="relative z-10">
				<ContactHero />
				<ContactInfo />
			</div>
		</main>
	);
}
