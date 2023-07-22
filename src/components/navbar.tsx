import styles from "@/styles/components/navbar.module.css";

import HomeIcon from "@/icons/HomeIcon";
import AboutIcon from "@/icons/AboutIcon";
import ResumeIcon from "@/icons/ResumeIcon";
import SkillsIcon from "@/icons/SkillsIcon";
import PortfolioIcon from "@/icons/PortfolioIcon";
import ContactIcon from "@/icons/ContactIcon";
import React, {useEffect, useRef, useState} from "react";
import HamburgerIcon from "@/icons/HamburgerIcon";

export default function Navbar() {
    const sections = ["home", "about", "resume", "skills", "portfolio", "contact"];
    const lastActiveItem = useRef<HTMLDivElement | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth"});

        const navbarItems = document.querySelectorAll(`.${styles.navbar} > div`);
        navbarItems.forEach(item => {
            item.setAttribute("data-active", "false");
        });

        e.currentTarget.setAttribute("data-active", "true");
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if (entry.isIntersecting) {
                        const navbarItem = document.querySelector(`.${styles.navbar} > div[data-id=${id}]`) as HTMLDivElement;
                        if (lastActiveItem.current) {
                            lastActiveItem.current.setAttribute('data-active', 'false');
                        }
                        navbarItem?.setAttribute('data-active', 'true');
                        lastActiveItem.current = navbarItem;
                    }
                });
            },
            {threshold: 0.7}
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <>
            <div className="block xl:hidden">
                {menuOpen ? (
                    <div id="menu-open"
                         className={`${styles.customBg} flex xl:hidden w-64 -ml-64 h-screen fixed duration-700`}>
                        <div className="w-full flex flex-col text-white px-5 py-4 space-y-4">
                            <div onClick={() => setMenuOpen(false)}
                                 className="text-right text-4xl hover:text-red-400">&times;</div>

                            <div className="flex flex-col gap-3">
                                {sections.map((section) => (
                                    <div key={section} onClick={(e) => scrollTo(e, section)} data-id={section}>
                                        {section === "home" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <HomeIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">Home</span>
                                            </div>
                                        )}
                                        {section === "about" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <AboutIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">About</span>
                                            </div>
                                        )}
                                        {section === "resume" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <ResumeIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">Resume</span>
                                            </div>
                                        )}
                                        {section === "skills" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <SkillsIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">Skills</span>
                                            </div>
                                        )}
                                        {section === "portfolio" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <PortfolioIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">Portfolio</span>
                                            </div>
                                        )}
                                        {section === "contact" && (
                                            <div className="flex justify-start items-center cursor-pointer py-3">
                                                <ContactIcon color="var(--color-text-soft)" className="h-6"/>
                                                <span className="ml-5 text-lg hover:font-bold">Contact</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="menu-closed" onClick={() => setMenuOpen(true)}
                         className={`${styles.customBg} z-50 fixed cursor-pointer right-8 top-8`}>
                        <HamburgerIcon color="var(--color-text)" className="w-16 h-16 p-4 border-2 rounded-full"/>
                    </div>
                )}
            </div>

            <div className="h-screen hidden xl:flex items-center justify-end w-full">
                <div
                    className={`${styles.navbar} rounded-full flex flex-col gap-10 px-4 py-7 cursor-pointer w-full fixed z-50 right-5 top-1/2 -translate-y-1/2`}>
                    {sections.map((section) => (
                        <div key={section} onClick={(e) => scrollTo(e, section)} data-id={section}>
                            {section === "home" && <HomeIcon color="var(--color-text-supersoft)"/>}
                            {section === "about" && <AboutIcon color="var(--color-text-supersoft)"/>}
                            {section === "resume" && <ResumeIcon color="var(--color-text-supersoft)"/>}
                            {section === "skills" && <SkillsIcon color="var(--color-text-supersoft)"/>}
                            {section === "portfolio" && <PortfolioIcon color="var(--color-text-supersoft)"/>}
                            {section === "contact" && <ContactIcon color="var(--color-text-supersoft)"/>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}