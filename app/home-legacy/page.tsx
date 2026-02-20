import Hero from "../components/Home/Hero";
import Clients from "../components/Home/Clients";
import Feedback from "../components/Home/Feedback";
import Why from "../components/Home/Why";
import Measured from "../components/Home/Measured";
import Modules from "../components/Home/Modules";
import WhoUses from "../components/Home/WhoUses";
import Achieve from "../components/Home/Achieve";
import Testimonials from "../components/Home/Testimonials";
import ChannelPartner from "../components/Home/ChannelPartner";

export default function HomeLegacy() {
    return (
        <main className="flex flex-col bg-white">
            <Hero />
            <Clients />
            <Feedback />
            <Why />
            <Measured />
            <Modules />
            <WhoUses />
            <Achieve />
            <Testimonials />
            <ChannelPartner />
        </main>
    );
}
