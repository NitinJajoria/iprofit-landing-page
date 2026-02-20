import MSMEHero from "../../components/Industry/MSMEHero";
import Clients from "../../components/Home/Clients";
import MSMEProblem from "../../components/Industry/MSMEProblem";
import MSMELeadsTo from "../../components/Industry/MSMELeadsTo";
import MSMEAdvantage from "../../components/Industry/MSMEAdvantage";
import MSMEWhy from "../../components/Industry/MSMEWhy";
import MSMEWhoAndWhat from "../../components/Industry/MSMEWhoAndWhat";
import MSMETestimonials from "../../components/Industry/MSMETestimonials";
import MSMEFinalCTA from "../../components/Industry/MSMEFinalCTA";
import WhoUses from "../../components/Home/WhoUses";

export default function MSMEsStartupsPage() {
	return (
		<main className="flex flex-col">
			<MSMEHero />
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<Clients />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMEProblem />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMELeadsTo />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMEAdvantage />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMEWhy />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMEWhoAndWhat />
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				{/* <MSMETestimonials /> */}
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
			<div className="mt-12 sm:mt-20 lg:mt-[100px]">
				<MSMEFinalCTA />
			</div>
		</main>
	);
}
