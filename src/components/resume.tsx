import styles from "@/styles/components/resume.module.css";
import ResumeIcon from "@/icons/ResumeIcon";

export default function Resume() {
    return (
        <div className="pt-16 custom-container">
            <div id="resume" className="section-header" data-aos="fade-up">
                <div className="section-start">
                    <ResumeIcon color="var(--color-text)"/>
                    <p className="uppercase">RESUME</p>
                </div>
            </div>

            <h1 className="section-title" data-aos="fade-up">
                Education & <span className="text-selected">Experience</span>
            </h1>

            <div className={`${styles.timeline} border-l-2`}>
                <div className="relative">
                    <div className={`${styles.timestamp} absolute w-3 h-3 rounded-full`} />

                    <div data-aos="fade-up">
                        <h2 className="sm:text-xl ps-14 leading-none">2021 - Present</h2>

                        <div className="mt-3 ps-14" data-aos="fade-up">
                            <h1 className="text-2xl sm:text-3xl">Bachelor Degree of Information Technology</h1>
                            <p className="text-sm sm:text-base pt-1 sm:pt-0 text-muted">University of PXL</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 relative">
                    <div className={`${styles.timestamp} absolute w-3 h-3 rounded-full`} />

                    <div data-aos="fade-up">
                        <h2 className="sm:text-xl ps-14 leading-none">2019 - 2021</h2>

                        <div className="mt-3 ps-14">
                            <h1 className="text-2xl sm:text-3xl">Highschool - Industrial ICT</h1>
                            <p className="text-sm sm:text-base pt-1 sm:pt-0 text-muted">VIIO</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 relative">
                    <div className={`${styles.timestamp} absolute w-3 h-3 rounded-full`} />

                    <div data-aos="fade-up">
                        <h2 className="sm:text-xl ps-14 leading-none">2019 - 2022</h2>

                        <div className="mt-3 ps-14" data-aos="fade-up">
                            <h1 className="text-2xl sm:text-3xl">Student Job</h1>
                            <p className="text-sm sm:text-base pt-1 sm:pt-0 text-muted">LIDL Belgium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}