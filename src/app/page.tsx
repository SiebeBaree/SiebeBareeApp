import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function HomePage() {
    return (
        <main className="container mx-auto px-4">
            <Hero />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
        </main>
    );
}
