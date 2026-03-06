import Hero from "../components/Home-v2/Hero";
import Problem from "../components/Home-v2/Problem";
// import Modules from "../components/Home-v2/Modules";
import ModulesV2 from "../components/Home-v2/ModulesOld";
import WithOrWithout from "../components/Home-v2/WithOrWithout";
import Measured from "../components/Home-v2/Measured";
import WhoUses from "../components/Home-v2/WhoUses";
import BusinessIntelligence from "../components/Home-v2/BusinessIntelligence";
import WhyFounders from "../components/Home-v2/WhyFounders";
import StatsSection from "../components/Home-v2/Stats";
import Testimonials from "../components/Home-v2/Testimonials";
import ChannelPartner from "../components/Home-v2/ChannelPartner";

export default function Home() {
	return (
		<main className="flex flex-col bg-white">
			<Hero />
			<Problem />
			{/* <Modules /> */}
			<ModulesV2 />
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
