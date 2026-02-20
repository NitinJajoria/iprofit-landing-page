import Image from "next/image";
import InventoryHero from "../components/Inventory/InventoryHero";
import Clients from "../components/Home/Clients";
import InventoryFeatures from "../components/Inventory/InventoryFeatures";
import InventoryDifferent from "../components/Inventory/InventoryDifferent";
import InventoryAdvantage from "../components/Inventory/InventoryAdvantage";
import Pricing from "../components/Payroll/Pricing";
import InventorySummary from "../components/Inventory/InventorySummary";
// import InventoryTestimonials from "../components/Inventory/InventoryTestimonials";
import BrandSummary from "../components/BrandSummary";
import WhoUses from "../components/Home/WhoUses";

export default function InventoryManagementPage() {
	return (
		<main className="flex flex-col">
			<InventoryHero />
			<div className="mt-12">
				<Clients />
			</div>
			<div className="mt-12">
				<InventoryFeatures />
			</div>
			<div className="mt-12">
				<InventoryDifferent />
			</div>
			<div className="mt-12">
				<InventoryAdvantage />
			</div>
			{/* Top Image */}
			<div className="relative mx-auto mt-10 aspect-[1000/450] w-full max-w-[800px]">
				<Image
					src="/solution/inventory-big.png"
					alt="Devices showing iProfit"
					fill
					className="object-contain"
				/>
			</div>
			<div className="mt-12">
				<Pricing />
			</div>
			<div className="mt-12">
				<InventorySummary />
			</div>
			<div className="mt-12">
				{/* <InventoryTestimonials /> */}
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
			<BrandSummary primaryService="Inventory" />
		</main>
	);
}
