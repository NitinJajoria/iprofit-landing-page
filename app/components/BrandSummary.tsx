import React from "react";

interface BrandSummaryProps {
	primaryService?: "Inventory" | "Finance" | "Payroll" | "Assets" | "Projects";
}

export default function BrandSummary({ primaryService }: BrandSummaryProps) {
	const services = ["Inventory", "Finance", "Payroll", "Assets", "Projects"];

	// Reorder services if primaryService is provided
	const displayServices = primaryService
		? [primaryService, ...services.filter((s) => s !== primaryService)]
		: services;

	return (
		<section className="bg-white px-4 pb-10 md:pb-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
				<div className="w-full max-w-5xl mx-auto rounded-[40px] bg-[#F3F7FE] p-10 sm:p-16 text-center">
					<h3
						className="mb-6 text-[40px] font-bold text-[#008ADD] sm:text-[56px]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						iProfit
					</h3>
					<p
						className="mb-8 text-[24px] font-medium text-[#080808] sm:text-[32px]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						Make Your Complicated Business Operations Simple
					</p>
					<div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
						{displayServices.map((item, i) => (
							<div key={i} className="flex items-center gap-3">
								<span className="h-2 w-2 rounded-full bg-[#008ADD]"></span>
								<span
									className="text-[18px] font-semibold text-[#31373D] sm:text-[22px]"
									style={{ fontFamily: "'Outfit', sans-serif" }}
								>
									{item}
								</span>
							</div>
						))}
					</div>
					<p
						className="text-[16px] font-medium text-[#6B7280] sm:text-[18px]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						All in one integrated ERP platform.
					</p>
				</div>
			</div>
		</section>
	);
}
