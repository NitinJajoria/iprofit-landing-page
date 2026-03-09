import Hero from "./components/Home-latest/Hero.tsx";
import Feedback from "./components/Home-latest/Feedback.tsx";
import Modules from "./components/Home-latest/Modules.tsx";
import WithOrWithout from "./components/Home-latest/WithOrWithout.tsx";
import Measured from "./components/Home-latest/Measured.tsx";
import WhoUses from "./components/Home-latest/WhoUses.tsx";
import BusinessIntelligence from "./components/Home-latest/BusinessIntelligence.tsx";
import WhyFounders from "./components/Home-latest/WhyFounders.tsx";
import StatsSection from "./components/Home-latest/StatsSection.tsx";
import Testimonials from "./components/Home-latest/Testimonials.tsx";
import ChannelPartner from "./components/Home-latest/ChannelPartner.tsx";

export default function Home() {
	return (
		<main className="flex flex-col bg-white">
			<Hero />
			<Feedback />
			<Modules />
			<Measured />
			<WithOrWithout />
			<WhoUses />
			<BusinessIntelligence />
			<WhyFounders />
			<StatsSection />
			<Testimonials />
			<ChannelPartner />
		</main>
	);
}
