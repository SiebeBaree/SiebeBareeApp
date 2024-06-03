"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { TechStack } from "@/components/tech-stack";
import NumberTicker from "./magicui/number-ticker";

export default function About() {
    return (
        <div className={cn(styles.cards, "flex flex-col gap-4")} id="about">
            <div className="grid min-h-[370px] gap-4 lg:grid-cols-2">
                <div className="col-span-1 grid grid-cols-2 gap-4">
                    <Card className="lg:p-4">
                        <StatisticCard title="Projects" value={15} suffix="+" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Experience" value={4} suffix="years" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Time spent coding" value={10000} suffix="hours" />
                    </Card>
                    <Card className="lg:p-4">
                        <StatisticCard title="Passion & Motivation" value={110} suffix="%" />
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
                            <p className="pb-0 text-muted-foreground">
                                Mijn naam is Siebe Barée, ik ben een ambitieuze en gedreven bachelorstudent met een
                                sterke passie voor technologie (programmeren), frontend ontwikkeling, business, en
                                UI/UX. Van jongs af aan ben ik gefascineerd door het creëren van projecten, in het begin
                                kleine projectjes in games, uiteindelijk heeft mij dat geleid tot een diepe interesse in
                                de complexiteit en de innovatieve mogelijkheden van de technologiewereld
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

            <Card className="flex min-h-[370px] flex-col items-center justify-between gap-8 pb-0 pt-12 md:flex-row md:py-0">
                <div className="flex-1">
                    <h1 className="mb-2 text-3xl font-medium">Jack of all trades but master of one</h1>
                    <p className="max-w-[600px] text-muted-foreground">
                        I focus to have a basic knowledge of a lot of different technologies. This allows me to quickly
                        adapt to new technologies and learn them quickly but I focus on Next.js and Go mainly to build
                        great websites and applications.
                    </p>
                </div>
                <div className="flex">
                    <TechStack />
                </div>
            </Card>

            <div className="grid min-h-[370px] gap-4 lg:grid-cols-2">
                <Card className="pb-10">
                    <h1 className="text-3xl font-medium">Education & Experience</h1>

                    <div className="pl-4 pt-4">
                        <div className="border-l-2 border-black">
                            <div className="relative mb-2 ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-muted-foreground")}>
                                        2021 - Present
                                    </p>
                                    <h3 className="-mt-1 text-xl font-medium">
                                        Bachelor Degree of Information Technology
                                    </h3>
                                    <p className="text-sm text-muted-foreground">University of PXL</p>
                                </div>
                            </div>
                            <div className="relative mb-2 ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-muted-foreground")}>
                                        2019 - 2021
                                    </p>
                                    <h3 className="-mt-1 text-xl font-medium">Highschool - Industrial ICT</h3>
                                    <p className="text-sm text-muted-foreground">VIIO Tongeren</p>
                                </div>
                            </div>
                            <div className="relative ml-4 p-[10px]">
                                <div className="flex flex-col">
                                    <p className={cn(styles.title, "relative text-sm text-muted-foreground")}>
                                        2019 - 2022
                                    </p>
                                    <h3 className="-mt-1 text-xl font-medium">Student Job</h3>
                                    <p className="text-sm text-muted-foreground">LIDL Belgium</p>
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
        <div
            className={cn(
                "relative rounded-lg border shadow-sm before:z-30 after:z-10 before:hover:opacity-100",
                styles.card,
            )}
        >
            <div className={cn("relative z-20 m-[1px] bg-card p-12", className, styles.cardContent)}>{children}</div>
        </div>
    );
}

function StatisticCard({ title, value, suffix }: { title: string; value: number; suffix?: string }) {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black md:text-5xl lg:text-4xl xl:text-5xl">
                <NumberTicker value={value} />
                {suffix && (
                    <span className="text-lg font-medium tracking-normal sm:text-xl lg:text-lg xl:text-xl">
                        {" "}
                        {suffix}
                    </span>
                )}
            </p>
            <div className="mt-1 text-center text-muted-foreground">{title}</div>
        </div>
    );
}
