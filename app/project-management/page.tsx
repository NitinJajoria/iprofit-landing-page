import Image from "next/image";
import ProjectHero from "../components/Project/ProjectHero";
import Clients from "../components/Home/Clients";
import ProjectFeatures from "../components/Project/ProjectFeatures";
import ProjectDifferent from "../components/Project/ProjectDifferent";
import ProjectAdvantage from "../components/Project/ProjectAdvantage";
import Pricing from "../components/Payroll/Pricing";
import ProjectSummary from "../components/Project/ProjectSummary";
// import ProjectTestimonials from "../components/Project/ProjectTestimonials";
import BrandSummary from "../components/BrandSummary";
import WhoUses from "../components/Home/WhoUses";

export default function ProjectManagementPage() {
	return (
		<main className="flex flex-col">
			<ProjectHero />
			<div className="mt-12">
				<Clients />
			</div>
			<div className="mt-12">
				<ProjectFeatures />
			</div>
			<div className="mt-12">
				<ProjectDifferent />
			</div>
			<div className="mt-12">
				<ProjectAdvantage />
			</div>
			{/* Top Image */}
			<div className="relative mx-auto mt-10 aspect-[1000/450] w-full max-w-[800px]">
				<Image
					src="/solution/project-big.png"
					alt="Devices showing iProfit"
					fill
					className="object-contain"
				/>
			</div>
			<div className="mt-12">
				<Pricing />
			</div>
			<div className="mt-12">
				<ProjectSummary />
			</div>
			<div className="mt-12">
				{/* <ProjectTestimonials /> */}
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
			<BrandSummary primaryService="Projects" />
		</main>
	);
}
