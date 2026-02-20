import Image from "next/image";
import BookDemoButton from "../BookDemoButton";

const features = [
  {
    id: 1,
    title: "Multi-Location Stock Visibility",
    description: "Track inventory across warehouses, branches, and locations in real time.",
    image: "/Payroll/PM1.png", // Placeholders
    bgColor: "bg-[#D1FADF]",
  },
  {
    id: 2,
    title: "Vendor & Purchase Order Management",
    description: "Create, approve, and track purchase orders with complete vendor visibility.",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#F3E8FF]",
  },
  {
    id: 3,
    title: "Material Receipts & Issues",
    description: "Record inward and outward stock movements with accuracy and control.",
    image: "/Payroll/PM3.png",
    bgColor: "bg-[#C7D2FE]",
  },
  {
    id: 4,
    title: "Automated Reorder Alerts",
    description: "Never run out of stock with minimum-level alerts and reorder triggers.",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#E0F2FE]",
  },
  {
    id: 5,
    title: "Stock Valuation & Audit Trails",
    description: "Maintain accurate stock valuation with complete transaction history.",
    image: "/Payroll/PM1.png",
    bgColor: "bg-[#FEF0C7]",
  },
  {
    id: 6,
    title: "Exception & MIS Reporting",
    description: "Identify discrepancies, slow-moving stock, and exceptions instantly.",
    image: "/Payroll/PM3.png",
    bgColor: "bg-[#FEE2E2]",
  },
];

export default function InventoryFeatures() {
  return (
    <section className="relative bg-white px-4 pt-0 pb-0 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Decorative Images */}
        <div className="absolute left-0 top-0 hidden lg:block">
          <Image src="/Payroll/C2.png" alt="Decoration" width={160} height={160} className="object-contain" />
        </div>
        <div className="absolute right-4 bottom-[-80px] hidden lg:block sm:right-6 md:right-10 lg:right-20">
          <Image src="/Payroll/C1.png" alt="Decoration" width={160} height={160} className="object-contain" />
        </div>

        {/* Header Section */}
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="mb-6 font-outfit text-[32px] font-medium leading-[100%] tracking-[0px] text-[#080808] sm:text-[40px] lg:text-[48px]">
            Industry-Leading Inventory Management Modules
          </h2>
          <h3 className="mb-[20px] font-outfit text-[24px] font-normal leading-[100%] tracking-[0px] text-[#080808] sm:text-[28px] lg:text-[32px]">
            Everything Your Inventory Team Needs — In One Platform
          </h3>
        </div>

        {/* Features Grid */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex w-[85%] flex-shrink-0 snap-center flex-col items-center rounded-[24px] ${feature.bgColor} p-8 text-center transition-transform hover:scale-[1.02] sm:w-auto`}
            >
              <div className="relative mb-8 h-[160px] w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="mb-4 font-outfit text-[18px] font-semibold text-[#080808] lg:text-[20px]">
                {feature.title}
              </h4>
              <p className="font-outfit text-[14px] font-normal leading-relaxed text-[#31373D] lg:text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-10 text-center sm:mt-14 lg:mt-[70px]">
          <BookDemoButton className="h-[56px] px-12 text-[16px]">
            👉 See All Inventory Features
          </BookDemoButton>
        </div> */}
      </div>
    </section>
  );
}
