import Image from "next/image";

const leadsToItems = [
  {
    id: 1,
    title: "Cash flow stress",
    image: "/Payroll/PM1.png",
    bgColor: "bg-[#D1FADF]",
  },
  {
    id: 2,
    title: "Compliance risks",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#F3E8FF]",
  },
  {
    id: 3,
    title: "Operational inefficiencies",
    image: "/Payroll/PM3.png",
    bgColor: "bg-[#C7D2FE]",
  },
  {
    id: 4,
    title: "Founder overload",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#E0F2FE]",
  },
  {
    id: 5,
    title: "Poor decision-making due to lack of data",
    image: "/Payroll/PM1.png",
    bgColor: "bg-[#FEE4E2]",
  },
];

export default function MSMELeadsTo() {
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
              lineHeight: '1.2',
              '--desktop-lh': '80px',
              color: '#080808'
            } as any}
          >
            <span className="lg:leading-[var(--desktop-lh)]">
              This results in:
            </span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:pb-0">
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
                className="text-[18px] lg:text-[20px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  color: '#080808'
                }}
              >
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
