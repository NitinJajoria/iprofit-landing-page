import Hero from "./components/home-latest/Hero";
import Feedback from "./components/home-latest/Feedback";
import Modules from "./components/home-latest/Modules";
import WithOrWithout from "./components/home-latest/WithOrWithout";
import Measured from "./components/home-latest/Measured";
import WhoUses from "./components/home-latest/WhoUses";
import CombinedSection from "./components/home-latest/CombinedSection";
import StatsSection from "./components/home-latest/StatsSection";
import Testimonials from "./components/home-latest/Testimonials";
import ChannelPartner from "./components/home-latest/ChannelPartner";

export default function Home() {
	return (
		<main className="flex flex-col bg-white">
			<Hero />
			<Feedback />
			<Modules />
			<Measured />
			<WithOrWithout />
			<WhoUses />
			<CombinedSection />
			<StatsSection />
			<Testimonials />
			<ChannelPartner />
		</main>
	);
}
