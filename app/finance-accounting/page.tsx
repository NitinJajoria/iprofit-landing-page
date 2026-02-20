import Image from "next/image";
import FinanceHero from "../components/Finance/FinanceHero";
import Clients from "../components/Home/Clients";
import FinanceFeatures from "../components/Finance/FinanceFeatures";
import FinanceDifferent from "../components/Finance/FinanceDifferent";
import FinanceAdvantage from "../components/Finance/FinanceAdvantage";
import Pricing from "../components/Payroll/Pricing";
import FinanceSummary from "../components/Finance/FinanceSummary";
import WhoUses from "../components/Home/WhoUses";
import BrandSummary from "../components/BrandSummary";

export default function FinanceAccountingPage() {
	return (
		<main className="flex flex-col">
			<FinanceHero />
			<div className="mt-12">
				<Clients />
			</div>
			<div className="mt-12">
				<FinanceFeatures />
			</div>
			<div className="mt-12">
				<FinanceDifferent />
			</div>
			<div className="mt-12">
				<FinanceAdvantage />
			</div>
			{/* Top Image */}
			<div className="relative mx-auto mt-10 aspect-[1000/450] w-full max-w-[800px]">
				<Image
					src="/solution/finance-big.png"
					alt="Devices showing iProfit"
					fill
					className="object-contain"
				/>
			</div>
			<div className="mt-12">
				<Pricing />
			</div>
			<div className="mt-12">
				<FinanceSummary />
			</div>
			<div className="mt-12">
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
			<div className="mt-12">
				<BrandSummary primaryService="Finance" />
			</div>
		</main>
	);
}
