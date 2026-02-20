import React from "react";

const problems = [
  {
    id: "01",
    text: "Project costs tracked in spreadsheets",
  },
  {
    id: "02",
    text: "Delayed or inaccurate payroll",
  },
  {
    id: "03",
    text: "No real-time view of profitability per project",
  },
  {
    id: "04",
    text: "HR, accounting, and billing running on different tools",
  },
  {
    id: "05",
    text: "Manual GST, TDS, and compliance follow-ups",
  },
];

export default function IndustryProblem() {
  return (
    <section className="w-full bg-[#F8F7FF] rounded-[40px] py-12 sm:rounded-[60px] sm:py-16 lg:rounded-[90px] lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 
            className="mb-6 text-[32px] sm:text-[40px] lg:text-[48px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              lineHeight: '1.2', // Fallback for mobile
              '--desktop-lh': '80px',
              color: '#080808'
            } as any}
          >
            <span className="lg:leading-[var(--desktop-lh)]">
              The Problem with Growing IT Services Companies
            </span>
          </h2>
          <p 
            className="mb-4 text-[20px] sm:text-[24px] lg:text-[28px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              lineHeight: '30px',
              color: '#080808'
            }}
          >
            Most IT companies scale fast—but their operations don&apos;t.
          </p>
          <p 
            className="text-[20px] sm:text-[24px] lg:text-[28px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              lineHeight: '30px',
              color: '#080808'
            }}
          >
            You&apos;re probably dealing with:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="flex flex-col items-center gap-6">
          {/* Row 1 */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {problems.slice(0, 2).map((problem) => (
              <ProblemCard key={problem.id} id={problem.id} text={problem.text} />
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {problems.slice(2, 4).map((problem) => (
              <ProblemCard key={problem.id} id={problem.id} text={problem.text} />
            ))}
          </div>

          {/* Row 3 - Centered */}
          <div className="flex w-full justify-center">
            <div className="w-full md:w-1/2">
              <ProblemCard id={problems[4].id} text={problems[4].text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ id, text }: { id: string; text: string }) {
  return (
    <div className="flex items-center gap-6 rounded-[20px] border border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] sm:p-8">
      <span 
        className="text-[32px] sm:text-[40px]"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          lineHeight: '100%',
          color: '#000000'
        }}
      >
        {id}
      </span>
      <p className="font-outfit text-[16px] font-medium text-[#080808] sm:text-[18px] lg:text-[20px]">
        {text}
      </p>
    </div>
  );
}
