import IndustryHero from "../../components/Industry/IndustryHero";
import Clients from "../../components/Home/Clients";
import IndustryProblem from "../../components/Industry/IndustryProblem";
import IndustryLeadsTo from "../../components/Industry/IndustryLeadsTo";
import IndustrySolution from "../../components/Industry/IndustrySolution";
import IndustryHRPayroll from "../../components/Industry/IndustryHRPayroll";
import IndustryAccounting from "../../components/Industry/IndustryAccounting";
import IndustryWhy from "../../components/Industry/IndustryWhy";
import IndustryWhoAndWhat from "../../components/Industry/IndustryWhoAndWhat";
import WhoUses from "../../components/Home/WhoUses";

export default function ITCompaniesPage() {
  return (
    <main className="flex flex-col">
      <IndustryHero />
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <Clients />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryProblem />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryLeadsTo />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustrySolution />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryHRPayroll />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryAccounting />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryWhy />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <IndustryWhoAndWhat />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <WhoUses 
          title="Testimonials" 
          subtitle="Check what our clients are saying" 
          showIndustries={false} 
          isTestimonial={true}
        />
      </div>
    </main>
  );
}
