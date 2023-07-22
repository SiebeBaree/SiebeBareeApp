import ProfileCard from "@/components/profilecard";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <div className="flex justify-between">
            <div>
                <ProfileCard />
            </div>

            <div className="page overflow-hidden">
                <Hero/>
                <About/>
                <Resume/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>

            <div>
                <Navbar />
            </div>
        </div>
    );
}
