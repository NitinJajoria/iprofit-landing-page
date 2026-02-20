import Image from "next/image";

const hrFeatures = [
  {
    id: 1,
    title: "Employee onboarding & records",
    icon: "/HR/HR1.png",
    bgColor: "bg-[#EEF2FF]",
  },
  {
    id: 2,
    title: "Attendance & leave management",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 3,
    title: "Statutory compliance made easy",
    icon: "/HR/HR2.png",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 4,
    title: "Project-wise cost allocation",
    icon: "/HR/HR4.png",
    bgColor: "bg-[#F1F5F9]",
  },
];

export default function IndustryHRPayroll() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1233px] rounded-[60px] bg-[#F3F7FE] px-6 py-12 sm:px-12 lg:px-[80px] lg:py-[60px]">
        {/* Title */}
        <h2 
          className="mb-12 text-center text-[32px] sm:text-[40px] lg:text-[48px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            lineHeight: '1.2',
            color: '#080808'
          }}
        >
          HR & Payroll Built for IT Teams
        </h2>

        {/* Features Grid */}
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {hrFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center gap-6">
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
              <p 
                className="text-[20px] lg:text-[24px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  color: '#080808',
                  lineHeight: '1.2'
                }}
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* Payroll Automation Section */}
        <div className="mx-auto mb-10 flex max-w-3xl items-start gap-6 px-0 pt-0 sm:items-center sm:gap-10 sm:px-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-white shadow-sm">
            <div className="relative h-10 w-10">
              <Image
                src="/HR/HR5.png"
                alt="Payroll Automation"
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
              Payroll automation with:
            </h4>
            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-8 sm:gap-y-3">
              {['Salary structures', 'TDS calculations', 'Payslips & reports'].map((item) => (
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

        {/* Footer Text */}
        <p 
          className="text-center text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[36px] lg:leading-[48px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            letterSpacing: '-1.2px',
            color: '#161C2D'
          }}
        >
          Pay teams accurately and on time—without manual errors.
        </p>
      </div>
    </section>
  );
}
