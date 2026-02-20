import Image from "next/image";

const leadsToItems = [
  {
    id: 1,
    title: "Margin leakage",
    description: "Get the freedom to configure your HRMS to cater organisational needs",
    image: "/Payroll/PM1.png",
    bgColor: "bg-[#D1FADF]",
  },
  {
    id: 2,
    title: "Operational chaos",
    description: "Simplify attendance and leave management with integrated HRMS systems",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#F3E8FF]",
  },
  {
    id: 3,
    title: "Founder dependency",
    description: "Month-end close in hours, not days.",
    image: "/Payroll/PM3.png",
    bgColor: "bg-[#C7D2FE]",
  },
  {
    id: 4,
    title: "Poor financial visibility",
    description: "One platform for all branches — consolidated, clean, and audit-safe.",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#E0F2FE]",
  },
];

export default function IndustryLeadsTo() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Header Section */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 
            className="text-[32px] sm:text-[40px] lg:text-[48px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              lineHeight: '1.2', // Fallback for mobile
              '--desktop-lh': '80px',
              color: '#080808'
            } as any}
          >
            <span className="lg:leading-[var(--desktop-lh)]">
              This leads to
            </span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar sm:grid sm:grid-cols-2 sm:pb-0 lg:grid-cols-4">
          {leadsToItems.map((item) => (
            <div
              key={item.id}
              className={`flex w-[85%] flex-shrink-0 snap-center flex-col items-center rounded-[24px] ${item.bgColor} p-8 text-center transition-transform hover:scale-[1.02] sm:w-auto`}
            >
              <div className="relative mb-8 h-[160px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 
                className="mb-4 text-[18px] lg:text-[20px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  color: '#080808'
                }}
              >
                {item.title}
              </h4>
              <p 
                className="text-[14px] lg:text-[16px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#31373D'
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
