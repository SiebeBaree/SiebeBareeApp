import About from "@/components/about";
// import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function HomePage() {
    return (
        <main className="container mx-auto px-4">
            <Hero />
            <About />
            <Projects />
            {/* <Testimonials /> */}
            {/* <Contact /> */}
        </main>
    );
}
