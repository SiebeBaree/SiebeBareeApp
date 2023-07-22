import styles from "@/styles/components/skills.module.css";

import SkillsIcon from "@/icons/SkillsIcon";
import TypeScriptIcon from "@/icons/TypeScriptIcon";
import {useEffect} from "react";
import ReactIcon from "@/icons/ReactIcon";
import PythonIcon from "@/icons/PythonIcon";
import JavaIcon from "@/icons/JavaIcon";
import FlutterIcon from "@/icons/FlutterIcon";
import FirebaseIcon from "@/icons/FirebaseIcon";
import DevIcon from "@/icons/DevIcon";

export default function Skills() {
    const timeSince = (date: Date) => {
        const timeDifferenceMs = Date.now() - date.getTime();

        const years = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24 * 30)) % 12;

        if (years >= 1) {
            if (months >= 9) {
                return `${years + 1} Years`;
            }
            return `${years} Year${years > 1 ? "s" : ""}`;
        } else if (months >= 9) {
            return "1 Year";
        }

        return `${months} Months`;
    }

    useEffect(() => {
        const wand = document.getElementById("wand");
        const tiles = document.querySelectorAll(".tile");

        const xy = (x: number, y: number) => ({x, y});
        const px = (value: number) => `${value}px`;
        const deg = (value: number) => `${value}deg`;
        const clamp = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);

        const updateMouse = (mouseX: number, mouseY: number) => {
            const {innerWidth: windowWidth, innerHeight: windowHeight} = window;

            const mouse = {
                position: xy(mouseX, mouseY),
                decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
                multiplier: xy(0.8, 0.4),
                offset: xy(windowWidth * -0.15, windowHeight * 0.05),
                modifiedPosition: xy(0, 0)
            }

            mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;
            mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;

            return mouse;
        }

        const revealImages = (mouseX: number) => {
            for (const tile of tiles) {
                if (tile instanceof HTMLElement) {
                    const dimensions = tile.getBoundingClientRect();
                    const relativeMouseX = mouseX - dimensions.left + 450;
                    const mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);

                    tile.style.setProperty("--opacity", mouseXAsDecimal.toString());
                    tile.style.setProperty("--blur", (1 - mouseXAsDecimal).toString());
                }
            }
        }

        const getWandStyles = (mouse: any) => ({
            left: px(mouse.modifiedPosition.x),
            top: px(mouse.modifiedPosition.y),
            rotate: deg(mouse.decimal.x * 20 - 10)
        });

        window.onmousemove = e => {
            if (wand) {
                const mouse = updateMouse(e.clientX, e.clientY);
                const wandStyles = getWandStyles(mouse);

                wand.animate(wandStyles, {duration: 400, fill: "forwards"});

                revealImages(mouse.modifiedPosition.x);
            }
        }
    }, []);

    return (
        <div className="pt-16 custom-container">
            <div id="skills" className="section-header" data-aos="fade-up">
                <div className="section-start">
                    <SkillsIcon color="var(--color-text)"/>
                    <p className="uppercase">SKILLS</p>
                </div>
            </div>

            <h1 className="section-title" data-aos="fade-up">
                My <span className="text-selected">Advantages</span>
            </h1>

            <div id="wand" className={`${styles.wand} absolute -rotate-3 rounded-xl overflow-hidden w-8 z-10 hidden xl:block`}>
                <div className={`${styles.cap} w-full h-1/5`}></div>
            </div>

            <div className="flex gap-3 xl:gap-0 flex-wrap xl:flex-nowrap justify-center">
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:rotate-3 cursor-default xl:shadow-none`}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <TypeScriptIcon/>
                        <p className="mt-1">{timeSince(new Date("2021-09-01"))}</p>
                    </div>
                </div>
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:-rotate-2 xl:-ms-5 cursor-default`}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <ReactIcon/>
                        <p className="mt-1">{timeSince(new Date("2022-06-01"))}</p>
                    </div>
                </div>
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:rotate-6 xl:-ms-5 cursor-default`}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <PythonIcon/>
                        <p className="mt-1">{timeSince(new Date("2020-05-01"))}</p>
                    </div>
                </div>
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:-rotate-3 xl:-ms-5 cursor-default`}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <JavaIcon/>
                        <p className="mt-1">{timeSince(new Date("2021-11-01"))}</p>
                    </div>
                </div>
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:rotate-6 xl:-ms-5 cursor-default`}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <FlutterIcon/>
                        <p className="mt-1">{timeSince(new Date("2023-02-09"))}</p>
                    </div>
                </div>
                <div
                    className={`${styles.tile} tile w-36 h-36 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden xl:-rotate-3 xl:-ms-5 cursor-default lg:hidden xl:flex `}>
                    <DevIcon color="var(--color-text-supersoft)" className={styles.prevImage}/>
                    <div className={`${styles.afterImage} absolute flex flex-col justify-center items-center h-full object-cover`}>
                        <FirebaseIcon/>
                        <p className="mt-1">{timeSince(new Date("2023-05-01"))}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}