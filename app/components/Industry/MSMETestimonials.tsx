import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "CEO",
    role: "MSME Client",
    image: "/Testimonials/T1.png",
    description: "“Our financial processes were fragmented and lacked visibility. Implementing iProfit provided us with a single source of truth for all our accounting data. The real-time dashboards have given our management team an unprecedented level of control.”",
  }
];

export default function MSMETestimonials() {
  return (
    <section className="bg-white px-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-24">
          <span 
            className="mb-4 block"
            style={{
              fontFamily: "'Gilroy', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '100%',
              textTransform: 'uppercase',
              color: '#3734A9'
            }}
          >
            Testimonials
          </span>
          <h2 
            className="mx-auto max-w-3xl text-[32px] sm:text-[36px] lg:text-[40px]"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              lineHeight: '48px',
              letterSpacing: '-3%',
              color: '#000000'
            }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Cards Grid - Centered for single testimonial */}
        <div className="flex justify-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-[800px] flex-col rounded-[40px] border border-[#191A23] bg-white p-8 shadow-[0_5px_0_0_#191A23] transition-all sm:p-12"
            >
              {/* Top Section: Image and Name */}
              <div className="relative mb-8 flex items-center gap-6">
                {/* Vector Image Container */}
                <div className="relative h-[100px] w-[100px] shrink-0">
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <clipPath id="vectorShape" clipPathUnits="objectBoundingBox">
                        <path d="M0.5,0.1 C0.65,0 0.85,0 0.95,0.2 C1.05,0.4 0.95,0.6 0.8,0.5 C0.95,0.4 1.05,0.6 0.95,0.8 C0.85,1 0.65,1 0.5,0.9 C0.35,1 0.15,1 0.05,0.8 C-0.05,0.6 0.05,0.4 0.2,0.5 C0.05,0.6 -0.05,0.4 0.05,0.2 C0.15,0 0.35,0 0.5,0.1 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  
                  <div 
                    className="absolute inset-0 bg-[#D0E8FF]" 
                    style={{ 
                      clipPath: "url(#vectorShape)",
                      transform: "rotate(-15deg) scale(1.1)" 
                    }}
                  />
                  
                  <div 
                    className="relative h-full w-full overflow-hidden"
                    style={{ clipPath: "url(#vectorShape)" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="flex-1">
                  <h4 className="font-space-grotesk text-[20px] font-medium leading-[100%] text-[#000000] lg:text-[24px]">
                    {item.name}
                  </h4>
                  <p className="mt-2 font-space-grotesk text-[18px] font-normal leading-[100%] text-[#000000] lg:text-[20px]">
                    {item.role}
                  </p>
                </div>

                {/* LinkedIn Icon */}
                <div className="absolute right-0 top-0">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black">
                    <Image
                      src="/Testimonials/linkedin.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-8 h-[1px] w-full bg-[#191A23]" />

              {/* Description */}
              <p className="font-space-grotesk text-[18px] font-normal leading-[1.6] text-[#000000] lg:text-[22px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
