"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import BookDemoButton from "../BookDemoButton";

const features = [
  {
    id: 1,
    title: "Salary Verification",
    description: "Live balance sheets, P&L, ledgers, cash flow — updated instantly.",
    image: "/Payroll/PM1.png",
    bgColor: "bg-[#D1FADF]",
  },
  {
    id: 2,
    title: "Payroll Queries",
    description: "E-invoicing, returns, reconciliation — without manual stress.",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#F3E8FF]",
  },
  {
    id: 3,
    title: "Payout Insights",
    description: "Month-end close in hours, not days.",
    image: "/Payroll/PM3.png",
    bgColor: "bg-[#C7D2FE]",
  },
  {
    id: 4,
    title: "Integration Support",
    description: "One platform for all branches — consolidated, clean, and audit-safe.",
    image: "/Payroll/PM2.png",
    bgColor: "bg-[#E0F2FE]",
  },
];

export default function PayrollFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container && window.innerWidth < 640) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const gap = 24; // gap-6
        const itemWidth = clientWidth + gap;

        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          container.scrollTo({ left: 0, behavior: "auto" });
        } else {
          const nextIndex = Math.round(scrollLeft / itemWidth) + 1;
          container.scrollTo({ left: nextIndex * itemWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white px-4 pt-0 pb-0 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Decorative Images - Aligned with Logo and Book Demo Button */}
        <div className="absolute left-4 top-0 hidden lg:block sm:left-6 md:left-10 lg:left-20">
          <Image src="/Payroll/C2.png" alt="Decoration" width={160} height={160} className="object-contain" />
        </div>
        <div className="absolute right-4 bottom-[-80px] hidden lg:block sm:right-6 md:right-10 lg:right-20">
          <Image src="/Payroll/C1.png" alt="Decoration" width={160} height={160} className="object-contain" />
        </div>

        {/* Header Section */}
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="mb-6 font-outfit text-[32px] font-medium leading-[100%] tracking-[0px] text-[#080808] sm:text-[40px] lg:text-[48px]">
            Payroll Management Software:
          </h2>
          <h3 className="mb-[20px] font-outfit text-[24px] font-normal leading-[100%] tracking-[0px] text-[#080808] sm:text-[28px] lg:text-[32px]">
            Accurate, timely and compliant payout, every time.
          </h3>
          <p className="mx-auto max-w-3xl font-outfit text-[16px] font-normal leading-[24px] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[40.8px]">
            Minimize payroll grievances with our fast and robust payroll management solution.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar sm:grid sm:grid-cols-2 sm:pb-0 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex w-full flex-shrink-0 snap-center flex-col items-center rounded-[24px] ${feature.bgColor} p-8 text-center transition-transform hover:scale-[1.02] sm:w-auto`}
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
            See all
          </BookDemoButton>
        </div> */}
      </div>
    </section>
  );
}
