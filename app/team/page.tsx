import TeamHero from "../components/Team/TeamHero";
import TeamStory from "../components/Team/TeamStory";
import TeamMembers from "../components/Team/TeamMembers";
import TeamJoinUs from "../components/Team/TeamJoinUs";

export default function TeamPage() {
  return (
    <main className="flex flex-col">
      <TeamHero />
      <TeamStory />
      <TeamMembers />
      <TeamJoinUs />
    </main>
  );
}
