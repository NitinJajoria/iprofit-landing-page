export default function ContactInfo() {
	return (
		<section className="py-10 md:py-20">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-0">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
					{/* Left Side */}
					<div>
						<p className="mb-6 font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E]">
							Contact Info
						</p>
						<h2 className="max-w-md text-[#080808] font-inter font-semibold text-[32px] sm:text-[40px] lg:text-[47.08px] leading-[1.3] tracking-normal">
							We are always happy to assist you
						</h2>
					</div>

					{/* Right Side */}
					<div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3">
						{/* Address */}
						<div>
							<h3 className="mb-4 font-outfit text-[18px] sm:text-[20px] font-bold text-[#080808]">
								Address
							</h3>
							<div className="mb-4 h-[2px] w-8 bg-black" />
							<p className="mb-4 font-outfit text-[16px] sm:text-[18px] font-bold text-[#080808]">
								Office Address
							</p>
							<p className="font-outfit text-[13px] sm:text-[14px] text-[#4E4E4E] leading-relaxed">
								Netsmartz House, 4th Floor,
								<br />
								IT Park,
								<br /> Chandigarh - 160101
							</p>
						</div>

						{/* Email */}
						<div>
							<h3 className="mb-4 font-outfit text-[18px] sm:text-[20px] font-bold text-[#080808]">
								Email Address
							</h3>
							<div className="mb-4 h-[2px] w-8 bg-black" />
							<p className="mb-4 font-outfit text-[16px] sm:text-[18px] font-bold text-[#080808]">
								info@iprofit.in
							</p>
							<p className="font-outfit text-[13px] sm:text-[14px] text-[#4E4E4E] leading-relaxed">
								Assistance hours:
								<br />
								Monday - Friday
								<br /> 9 am to 6 pm EST
							</p>
						</div>

						{/* Number */}
						<div>
							<h3 className="mb-4 font-outfit text-[18px] sm:text-[20px] font-bold text-[#080808]">
								Number
							</h3>
							<div className="mb-4 h-[2px] w-8 bg-black" />
							<p className="mb-4 font-outfit text-[16px] sm:text-[18px] font-bold text-[#080808]">
								+91-86699-00099
							</p>
							<p className="font-outfit text-[13px] sm:text-[14px] text-[#4E4E4E] leading-relaxed">
								Assistance hours:
								<br />
								Monday - Friday
								<br /> 9 am to 6 pm EST
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
