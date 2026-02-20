import Image from "next/image";

const financeFeatures = [
  {
    id: 1,
    title: "Built for Global & Local Compliance",
    description: "Stay compliant with tax regulations, reporting standards, and financial rules across multiple regions.",
    icon: "/HR/HR1.png", // Placeholder icons
    bgColor: "bg-[#EEF2FF]",
  },
  {
    id: 2,
    title: "Bank & ERP Connectivity",
    description: "Seamlessly integrate with leading banks and ERP modules for accurate, real-time reconciliation.",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 3,
    title: "Project & Branch Accounting",
    description: "Track profitability across projects, branches, or departments with complete transparency.",
    icon: "/HR/HR4.png",
    bgColor: "bg-[#F1F5F9]",
  },
  {
    id: 4,
    title: "Cloud-Powered Automation",
    description: "Automate repetitive accounting tasks, speed up reporting, and gain instant financial insights.",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#F0FDF4]",
  },
];

export default function FinanceDifferent() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1233px] rounded-[60px] bg-[#F3F7FE] px-6 py-12 sm:px-12 lg:px-[80px] lg:py-[60px]">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 
            className="mb-4 text-[32px] sm:text-[40px] lg:text-[48px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              lineHeight: '1.2',
              color: '#080808'
            }}
          >
            What Makes iProfit Different
          </h2>
          <h3 
            className="text-[20px] sm:text-[24px] lg:text-[28px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              color: '#31373D'
            }}
          >
            Smarter Accounting. Built for Growth.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {financeFeatures.map((feature) => (
            <div key={feature.id} className="flex items-start gap-6">
              <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] ${feature.bgColor}`}>
                <div className="relative h-10 w-10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p 
                  className="mb-2 text-[20px] lg:text-[24px]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    color: '#080808',
                    lineHeight: '1.2'
                  }}
                >
                  {feature.title}
                </p>
                <p 
                  className="text-[14px] lg:text-[16px]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    color: '#31373D',
                    lineHeight: '1.5'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mx-auto flex max-w-3xl items-start gap-6 px-0 pt-0 sm:items-center sm:gap-10 sm:px-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-white shadow-sm">
            <div className="relative h-10 w-10">
              <Image
                src="/HR/HR5.png"
                alt="Scalability"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h4 
              className="mb-4 text-[20px] lg:text-[24px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                color: '#080808'
              }}
            >
              Designed for Businesses of All Sizes
            </h4>
            <p 
              className="mb-4 text-[14px] lg:text-[16px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                color: '#31373D'
              }}
            >
              Flexible and scalable finance modules that adapt to:
            </p>
            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-8 sm:gap-y-3">
              {['Startups', 'MSMEs', 'Enterprises'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#31373D]"></span>
                  <p 
                    className="text-[14px] lg:text-[18px]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      color: '#31373D'
                    }}
                  >
                    {item}
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
