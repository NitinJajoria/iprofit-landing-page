import Hero from "./components/Home-latest/Hero";
import Problem from "./components/Home-latest/Problem";
import Modules from "./components/Home-latest/Modules";
import WithOrWithout from "./components/Home-latest/WithOrWithout";
import Measured from "./components/Home-latest/Measured";
import WhoUses from "./components/Home-latest/WhoUses";
import BusinessIntelligence from "./components/Home-latest/BusinessIntelligence";
import WhyFounders from "./components/Home-latest/WhyFounders";
import StatsSection from "./components/Home-latest/Stats";
import Testimonials from "./components/Home-latest/Testimonials";
import ChannelPartner from "./components/Home-latest/ChannelPartner";

export default function Home() {
	return (
		<main className="flex flex-col bg-white">
			<Hero />
			<Problem />
			<Modules />
			<WithOrWithout />
			<Measured />
			<WhoUses />
			<BusinessIntelligence />
			<WhyFounders />
			<StatsSection />
			<Testimonials />
			<ChannelPartner />
		</main>
	);
}
