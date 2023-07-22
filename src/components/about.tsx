import AboutIcon from "@/icons/AboutIcon";

export default function About() {
    return (
        <div className="custom-container">
            <div id="about" className="section-header" data-aos="fade-up">
                <div className="section-start">
                    <AboutIcon color="var(--color-text)"/>
                    <p className="uppercase">ABOUT</p>
                </div>
            </div>

            <h1 className="section-title" data-aos="fade-up">
                From Lines of Code to Problem Solving: <span className="text-selected">My Tech Journey</span>
            </h1>
            <div>
                <p className="text-muted" data-aos="fade-up">
                    Hello, I&apos;m an enthusiastic software developer with over three years of industry experience.
                    I&apo;s worked with JavaScript, TypeScript, Python, Java, C# .NET and I&apos;m currently exploring
                    Dart (Flutter). I&apos;m also familiar with a wide range of frameworks and libraries, including
                    React, Next.js, Vue, Node.js, Tailwindcss, Express, Flask, Spring Boot and ASP.NET.
                </p>
                <br/>
                <p className="text-muted" data-aos="fade-up">
                    My passion for programming extends beyond simply writing code. I love solving complex problems and
                    creating innovative solutions that make a difference. Programming is not the only thing I&apos;m
                    passionate about. I enjoy working on projects that span several months. This approach helps me to
                    get a better understanding how to manage significant amounts of code, maintain discipline throughout
                    the project, handle the marketing aspect and become conversant with the financial side of running
                    a business. I firmly believe that a deep understanding of these topics not only makes me a versatile
                    developer but also helps me to create software that provides genuine value.
                </p>
                <br/>
                <p className="text-muted" data-aos="fade-up">
                    Learning is an never ending journey, and I continuously seek new ways to improve my productivity and
                    increase my efficiency.

                    I eagerly embrace innovative methodologies, tools, and practices that help to
                    streamline the development process. Whether it&apos;s a new coding technique, a novel project
                    management tool, or an emerging trend in the tech industry, I&apos;m always prepared to learn and
                    integrate it into my workflow. My mission is to grow with every project, pushing boundaries and
                    driving technological innovation.
                </p>
            </div>
        </div>
    );
}