import { Button } from "@/components/ui/button";
import Stars from "./stars";
import styles from "@/styles/Home.module.css";
import { cn } from "@/lib/utils";
import WordRotate from "./magicui/word-rotate";

export default function Hero() {
    return (
        <div className="flex min-h-[calc(100vh-60px)] flex-col-reverse items-center justify-center gap-8 pb-12 pt-12 lg:my-40 lg:min-h-0 lg:flex-row lg:justify-between">
            <div>
                <h1 className="text-center text-6xl font-bold lg:text-left">
                    Hi, I&apos;m{" "}
                    <span className={cn("relative", styles.magic)}>
                        <Stars />
                        <span className={styles.magicText}>Siebe Barée</span>
                    </span>
                </h1>
                <div className="mb-4 mt-1">
                    <p className="flex items-center gap-1 text-center text-lg lg:text-left">
                        I&apos;m a passionate software engineer with a love for web development and design.
                    </p>
                    <p className="hidden items-center justify-center gap-1 text-center text-lg sm:flex lg:justify-normal lg:text-left">
                        I specialize in
                        <WordRotate
                            className="font-medium"
                            words={[
                                "Web Development.",
                                "UI/UX Design.",
                                "Next.js.",
                                "Go.",
                                "Web Performance Optimization.",
                                "Responsive Design.",
                            ]}
                        />
                    </p>
                </div>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <Button>Download CV</Button>
                    {/* <Button>Contact Me</Button> */}
                </div>
            </div>
            <div>
                <div className="h-72 w-72 rounded-lg bg-gray-800 md:h-96 md:w-96"></div>
            </div>
        </div>
    );
}
