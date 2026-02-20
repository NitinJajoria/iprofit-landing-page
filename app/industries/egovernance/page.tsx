import EGovernanceHero from "../../components/Industry/EGovernanceHero";
import Clients from "../../components/Home/Clients";
import EGovernanceProblem from "../../components/Industry/EGovernanceProblem";
import EGovernanceLeadsTo from "../../components/Industry/EGovernanceLeadsTo";
import EGovernanceAdvantage from "../../components/Industry/EGovernanceAdvantage";
import EGovernanceWhy from "../../components/Industry/EGovernanceWhy";
import EGovernanceWhoAndWhat from "../../components/Industry/EGovernanceWhoAndWhat";

export default function EGovernancePage() {
  return (
    <main className="flex flex-col">
      <EGovernanceHero />
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <Clients />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <EGovernanceProblem />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <EGovernanceLeadsTo />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <EGovernanceAdvantage />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <EGovernanceWhy />
      </div>
      <div className="mt-12 sm:mt-20 lg:mt-[100px]">
        <EGovernanceWhoAndWhat />
      </div>
    </main>
  );
}
