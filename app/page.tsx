import Hero from "./components/home-latest/Hero.tsx";
import Feedback from "./components/home-latest/Feedback.tsx";
import Modules from "./components/home-latest/Modules.tsx";
import WithOrWithout from "./components/home-latest/WithOrWithout.tsx";
import Measured from "./components/home-latest/Measured.tsx";
import WhoUses from "./components/home-latest/WhoUses.tsx";
import CombinedSection from "./components/home-latest/CombinedSection.tsx";
import StatsSection from "./components/home-latest/StatsSection.tsx";
import Testimonials from "./components/home-latest/Testimonials.tsx";
import ChannelPartner from "./components/home-latest/ChannelPartner.tsx";

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
