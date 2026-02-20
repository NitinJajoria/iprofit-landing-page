import Image from "next/image";

const inventoryFeatures = [
  {
    id: 1,
    title: "Real-Time Stock Tracking",
    description: "Track warehouses, bins, and item movements instantly with real-time updates.",
    icon: "/HR/HR1.png", // Placeholder icons
    bgColor: "bg-[#EEF2FF]",
  },
  {
    id: 2,
    title: "Vendor & PO Control",
    description: "Automated approvals, acknowledgements, and reporting for vendor and purchase management.",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 3,
    title: "Forecasting & Replenishment",
    description: "Smart alerts for minimum stock levels, reorder points, and consumption trends.",
    icon: "/HR/HR4.png",
    bgColor: "bg-[#F1F5F9]",
  },
  {
    id: 4,
    title: "Audit-Ready Reports",
    description: "Track variances, direct purchases, stock adjustments, and vendor compliance with ease.",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#F0FDF4]",
  },
];

export default function InventoryDifferent() {
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
            Smarter Inventory. Built for Growth.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {inventoryFeatures.map((feature) => (
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
      </div>
    </section>
  );
}
