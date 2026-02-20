import Image from "next/image";
import AssetHero from "../components/Asset/AssetHero";
import Clients from "../components/Home/Clients";
import AssetFeatures from "../components/Asset/AssetFeatures";
import AssetDifferent from "../components/Asset/AssetDifferent";
import AssetAdvantage from "../components/Asset/AssetAdvantage";
import Pricing from "../components/Payroll/Pricing";
import AssetSummary from "../components/Asset/AssetSummary";
// import AssetTestimonials from "../components/Asset/AssetTestimonials";
import BrandSummary from "../components/BrandSummary";
import WhoUses from "../components/Home/WhoUses";

export default function AssetManagementPage() {
	return (
		<main className="flex flex-col">
			<AssetHero />
			<div className="mt-12">
				<Clients />
			</div>
			<div className="mt-12">
				<AssetFeatures />
			</div>
			<div className="mt-12">
				<AssetDifferent />
			</div>
			<div className="mt-12">
				<AssetAdvantage />
			</div>
			{/* Top Image */}
			<div className="relative mx-auto mt-10 aspect-[1000/450] w-full max-w-[800px]">
				<Image
					src="/solution/asset-big.png"
					alt="Devices showing iProfit"
					fill
					className="object-contain"
				/>
			</div>
			<div className="mt-12">
				<Pricing />
			</div>
			<div className="mt-12">
				<AssetSummary />
			</div>
			<div className="mt-12">
				{/* <AssetTestimonials /> */}
				<WhoUses
					title="Testimonials"
					subtitle="Check what our clients are saying"
					showIndustries={false}
					isTestimonial={true}
				/>
			</div>
			<BrandSummary primaryService="Assets" />
		</main>
	);
}
