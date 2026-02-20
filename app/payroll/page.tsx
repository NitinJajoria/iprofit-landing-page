import Image from "next/image";
import PayrollHero from "../components/Payroll/PayrollHero";
import Clients from "../components/Home/Clients";
import PayrollFeatures from "../components/Payroll/PayrollFeatures";
import SalaryStructure from "../components/Payroll/SalaryStructure";
import FinanceInventory from "../components/Payroll/FinanceInventory";
import Pricing from "../components/Payroll/Pricing";
import WhoUses from "../components/Home/WhoUses";

export default function PayrollPage() {
	return (
		<main className="flex flex-col">
			<PayrollHero />
			<div className="mt-12">
				<Clients />
			</div>
			<div className="mt-12">
				<PayrollFeatures />
			</div>
			<div className="mt-12">
				<SalaryStructure />
			</div>
			<div className="mt-12">
				<FinanceInventory />
			</div>
			{/* Top Image */}
			<div className="relative mx-auto mt-10 aspect-[1000/450] w-full max-w-[800px]">
				<Image
					src="/solution/payroll-big.png"
					alt="Devices showing iProfit"
					fill
					className="object-contain"
				/>
			</div>
			<div className="mt-12">
				<Pricing />
			</div>
			<div className="mt-12">
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
		</main>
	);
}
