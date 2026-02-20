import Image from "next/image";

const steps = [
	{
		id: 1,
		text: "Configure pay groups as per organizational structure",
	},
	{
		id: 2,
		text: "Assign salary structure to new joiner for no salary delays",
	},
	{
		id: 3,
		text: "Automated CTC calculator to process error-free payroll",
	},
];

export default function SalaryStructure() {
	return (
		<section className="bg-white px-4 pt-0 pb-0 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1233px] rounded-[30px] border-b-[11px] border-[#BED2FE] bg-white px-6 py-10 sm:px-12 lg:px-[80px] lg:py-[40px]">
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
					{/* Left Content: Image */}
					<div className="relative w-full lg:flex-1">
						<div className="relative aspect-[680/540] w-full">
							<Image
								src="/solution/payroll-1.png"
								alt="Salary Structure Dashboard"
								fill
								className="object-contain"
							/>
						</div>
					</div>

					{/* Right Content: Text */}
					<div className="w-full lg:flex-1">
						<h2 className="text-center md:text-start mb-6 font-outfit text-[32px] font-medium leading-[100%] tracking-[0px] text-[#080808] sm:text-[40px] lg:text-[48px]">
							Salary Structure
						</h2>
						<h3 className="text-center md:text-start mb-10 font-outfit text-[24px] font-normal leading-[100%] tracking-[0px] text-[#080808] sm:text-[28px] lg:text-[32px]">
							Process salaries in a tap
						</h3>

						<div className="space-y-8">
							{steps.map((step) => (
								<div key={step.id} className="flex items-start gap-6">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] font-outfit text-[18px] font-semibold text-[#4F46E5]">
										{step.id}
									</div>
									<p className="pt-1 font-outfit text-[16px] font-normal leading-[1.6] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[30px]">
										{step.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
