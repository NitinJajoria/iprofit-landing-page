import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Vishal Sood",
    role: "CEO, Almabay",
    image: "/Testimonials/T1.png",
    description: "“Our project and financial data were scattered across tools. iProfit gave us a single system to manage execution, costs, and reporting with complete visibility.”",
  },
  {
    id: 2,
    name: "Maninder Bajwa",
    role: "Managing Director, Espranza",
    image: "/Testimonials/T2.png",
    description: "“Managing resources and compliance across projects was becoming overwhelming. iProfit helped us streamline execution and focus on our core objectives.”",
  },
];

export default function ProjectTestimonials() {
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
            What Our Clients Say
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-6 pb-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-x-visible lg:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex w-[300px] shrink-0 snap-center flex-col rounded-[40px] border border-[#191A23] bg-white p-8 shadow-[4px_4px_0px_0px_#191A23] transition-all sm:w-full sm:shrink"
            >
              {/* Top Section: Image and Name */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="relative h-[80px] w-[80px] shrink-0">
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

                <div className="flex-1">
                  <h4 className="font-space-grotesk text-[18px] font-medium leading-[1.2] text-[#000000] lg:text-[20px]">
                    {item.name}
                  </h4>
                  <p className="mt-1 font-space-grotesk text-[16px] font-normal leading-[1.2] text-[#000000] lg:text-[18px]">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mb-6 h-[1px] w-full bg-[#191A23]" />

              <p className="font-space-grotesk text-[16px] font-normal leading-[1.5] text-[#000000] lg:text-[18px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
