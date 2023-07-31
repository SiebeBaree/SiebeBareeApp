import styles from "@/styles/components/portfolio.module.css";

import PortfolioIcon from "@/icons/PortfolioIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import Image from "next/image";

export default function Portfolio() {
    return (
        <div className="pt-16 custom-container">
            <div id="portfolio" className="section-header" data-aos="fade-up">
                <div className="section-start">
                    <PortfolioIcon color="var(--color-text)"/>
                    <p className="uppercase">PORTFOLIO</p>
                </div>
            </div>

            <h1 className="section-title" data-aos="fade-up">
                Featured <span className="text-selected">Projects</span>
            </h1>

            <div className="flex flex-col justify-center gap-8">
                <div
                    className={`${styles.project} w-full h-96 rounded-2xl p-5 flex flex-col justify-between`}
                    data-aos="fade-up"
                    style={{
                        backgroundImage: 'url("/coinz.jpg")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-bold">Coinz</h1>

                        <div className={`${styles.ctaButtons} items-center justify-end gap-3 sm:gap-4 flex sm:hidden`}>
                            <a href="https://github.com/SiebeBaree/Coinz" target="_blank">
                                <GitHubIcon color="var(--color-text)"/>
                            </a>
                            <a href="https://github.com/SiebeBaree/coinz-app" target="_blank">
                                <GitHubIcon color="var(--color-text)"/>
                            </a>
                            <a href="https://coinzbot.xyz/" target="_blank" data-hide="true">
                                <button className="bg-blue-900 px-5 py-auto rounded-full font-bold">View Project
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full gap-8">
                        <p className={`${styles.projectText} text-sm`}>
                            A life simulation game inside Discord where you can earn money by playing mini-games with
                            more that 400.000 users.
                        </p>

                        <div className={`${styles.ctaButtons} items-center justify-end gap-4 basis-1/2 hidden sm:flex`}>
                            <a href="https://github.com/SiebeBaree/Coinz" target="_blank">
                                <GitHubIcon color="var(--color-text)"/>
                            </a>
                            <a href="https://github.com/SiebeBaree/coinz-app" target="_blank">
                                <GitHubIcon color="var(--color-text)"/>
                            </a>
                            <a href="https://coinzbot.xyz/" target="_blank">
                                <button className="bg-blue-900 px-5 py-auto rounded-full font-bold">View Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}