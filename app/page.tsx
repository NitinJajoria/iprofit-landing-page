import HeroVideo from "./components/Home/HeroVideo";
import Clients from "./components/Home/Clients";
import ProblemSection from "./components/Home/ProblemSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import Why from "./components/Home/Why";
import Measured from "./components/Home/Measured";
import StatsSection from "./components/Home/StatsSection";
import Modules from "./components/Home/Modules";
import WhoUses from "./components/Home/WhoUses";
import Achieve from "./components/Home/Achieve";
import BusinessIntelligence from "./components/Home/BusinessIntelligence";
import WhyFounders from "./components/Home/WhyFounders";
import ComparisonSection from "./components/Home/ComparisonSection";
import Testimonials from "./components/Home/Testimonials";
import ChannelPartner from "./components/Home/ChannelPartner";

export default function Home() {
	return (
		<main className="flex flex-col bg-white">
			<HeroVideo />
			<Clients />
			<StatsSection />
			<ProblemSection />
			<ComparisonSection />
			<Why />
			<Achieve />
			<FeaturesSection />
			<Modules />
			<Measured />
			<BusinessIntelligence />
			<WhoUses />
			<WhyFounders />
			<Testimonials />
			<ChannelPartner />
		</main>
	);
}
