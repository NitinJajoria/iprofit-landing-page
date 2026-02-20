import React from "react";

const responsibilities = [
  {
    id: "01",
    text: "Delivering citizen-centric services",
  },
  {
    id: "02",
    text: "Ensuring strict regulatory and audit compliance",
  },
  {
    id: "03",
    text: "Managing public funds with transparency",
  },
  {
    id: "04",
    text: "Coordinating across departments and agencies",
  },
  {
    id: "05",
    text: "Aligning with national and state-level policies",
  },
];

const currentChallenges = [
  { id: "01", text: "Manual or semi-digital workflows" },
  { id: "02", text: "Disconnected systems across functions" },
  { id: "03", text: "Limited real-time visibility" },
  { id: "04", text: "Heavy dependence on paperwork" },
];

export default function EGovernanceProblem() {
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
              lineHeight: '1.2',
              '--desktop-lh': '80px',
              color: '#080808'
            } as any}
          >
            <span className="lg:leading-[var(--desktop-lh)]">
              The Reality of Managing Government Operations
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
            Running a government department is fundamentally different from running a business.
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
            You are responsible for:
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="flex flex-col items-center gap-6 mb-16 lg:mb-20">
          {/* Row 1 */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {responsibilities.slice(0, 2).map((item) => (
              <ProblemCard key={item.id} id={item.id} text={item.text} />
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {responsibilities.slice(2, 4).map((item) => (
              <ProblemCard key={item.id} id={item.id} text={item.text} />
            ))}
          </div>

          {/* Row 3 - Centered */}
          <div className="flex w-full justify-center">
            <div className="w-full md:w-1/2">
              <ProblemCard id={responsibilities[4].id} text={responsibilities[4].text} />
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="text-center">
          <h3 
            className="mb-12 text-[24px] sm:text-[28px] lg:text-[32px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              color: '#080808'
            }}
          >
            Yet many departments still operate on:
          </h3>
          <div className="flex flex-col items-center gap-6">
            {/* Row 1 */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              {currentChallenges.slice(0, 2).map((item) => (
                <ProblemCard key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            
            {/* Row 2 */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              {currentChallenges.slice(2, 4).map((item) => (
                <ProblemCard key={item.id} id={item.id} text={item.text} />
              ))}
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
