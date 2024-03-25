"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Technology from "@/components/technology";
import { useEffect, useRef } from "react";

export default function About() {
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cardsContainer = cardsContainerRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            for (const card of document.getElementsByClassName(styles.card!) as HTMLCollectionOf<HTMLElement>) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        cardsContainer?.addEventListener("mousemove", handleMouseMove);

        return () => {
            cardsContainer?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={cardsContainerRef} className={cn(styles.cards, "flex flex-col gap-4")}>
            <div className="grid min-h-[370px] gap-4 lg:grid-cols-2">
                <div className="col-span-1 grid grid-cols-2 gap-4">
                    <Card className="lg:p-4">
                        <StatisticCard title="Projects Completed" value="15+" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Experience" value="4" suffix="years" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Time spent coding" value="10.000" suffix="hours" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Passion & Motivation" value="110%" />
                    </Card>
                </div>
                <Card className="flex h-full flex-col px-12 pb-0 pt-12">
                    <h1 className="mb-2 text-3xl font-medium">My journey</h1>
                    <div className="flex overflow-hidden">
                        <div>
                            <span
                                className="float-right ml-8 flex h-full items-end"
                                style={{
                                    shapeOutside: "inset(calc(100% - 180px - 12px) 0 0)",
                                }}
                            >
                                <Image src="/waving.png" alt="My Apple Memoji Waving At You" height={180} width={180} />
                            </span>
                            <p className="pb-0">
                                {/* I started my programming journey in 2020 when I was 16 years old. I was bored during
                                lockdown and decided to learn something new. I started with Python as this was an easy
                                language to start with. I started building a discord bot and grew to love programming.
                                After a year I decided to learn JavaScript (Node.js) */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci
                                ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet
                                malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna
                                ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at
                                venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur
                                finibus tincidunt ullamcorper.
                                <Image
                                    src="/signature.svg"
                                    alt="My Signature"
                                    height={51}
                                    width={101}
                                    className="pt-4"
                                />
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <Card className="flex min-h-[370px] flex-col items-center justify-between gap-8 md:flex-row">
                <div>
                    <h1 className="mb-2 text-3xl font-medium">Focus on a few frameworks</h1>
                    <p className="max-w-[450px]">
                        I focus on a few frameworks to build great websites but always learn new tech to stay updated.
                        This mix of deep knowledge and new skills means I can tackle any project with the latest
                        methods.
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex justify-center gap-2 md:gap-4">
                        <Technology name="nextjs" className="h-24 w-24 lg:h-32 lg:w-32" />
                        <Technology name="react" className="h-24 w-24 lg:h-32 lg:w-32" />
                    </div>
                    <div className="flex gap-2 md:gap-4">
                        <Technology name="svelte" className="h-16 w-16 lg:h-24 lg:w-24" />
                        <Technology name="node" className="h-16 w-16 lg:h-24 lg:w-24" />
                        <Technology name="spring" className="h-16 w-16 lg:h-24 lg:w-24" />
                        <Technology name="vue" className="h-16 w-16 lg:h-24 lg:w-24" />
                        <Technology name="netcore" className="h-16 w-16 lg:h-24 lg:w-24" />
                    </div>
                </div>
            </Card>

            <div className="grid min-h-[370px] gap-4 lg:grid-cols-2">
                <Card className="pb-10">
                    <h1 className="text-3xl font-medium">Education & Experience</h1>

                    <div className="pl-4 pt-4">
                        <div className="border-l-2 border-black">
                            <div className="relative mb-2 ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-gray-500")}>2021 - Present</p>
                                    <h3 className="-mt-1 text-xl font-medium">
                                        Bachelor Degree of Information Technology
                                    </h3>
                                    <p className="text-sm text-gray-500">University of PXL</p>
                                </div>
                            </div>
                            <div className="relative mb-2 ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-gray-500")}>2019 - 2021</p>
                                    <h3 className="-mt-1 text-xl font-medium">Highschool - Industrial ICT</h3>
                                    <p className="text-sm text-gray-500">VIIO Tongeren</p>
                                </div>
                            </div>
                            <div className="relative ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-gray-500")}>2019 - 2022</p>
                                    <h3 className="-mt-1 text-xl font-medium">Student Job</h3>
                                    <p className="text-sm text-gray-500">LIDL Belgium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>Card 8</Card>
            </div>
        </div>
    );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("relative rounded-lg border before:z-30 after:z-10 before:hover:opacity-100", styles.card)}>
            <div className={cn("relative z-20 m-[1px] bg-card p-12", className, styles.cardContent)}>{children}</div>
        </div>
    );
}

function StatisticCard({ title, value, suffix }: { title: string; value: string; suffix?: string }) {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="text-center text-3xl font-medium md:text-5xl lg:text-4xl xl:text-5xl">
                {value}
                {suffix && <span className="text-lg font-medium sm:text-xl lg:text-lg xl:text-xl"> {suffix}</span>}
            </p>
            <div className="mt-1 text-center text-gray-500">{title}</div>
        </div>
    );
}
