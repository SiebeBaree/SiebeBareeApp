"use client";

import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

type TechnologyItem = {
    name: string;
    url: string;
    description: string;
    date: Date;
};

const technologies = {
    nextjs: {
        name: "Next.js",
        url: "https://nextjs.org/",
        description:
            "A powerful React framework for building server-side rendering and static web applications, offering features like file-based routing, API routes, and optimization out of the box.",
        date: new Date("2022-08-01"),
    },
    react: {
        name: "React",
        url: "https://reactjs.org/",
        description:
            "A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
        date: new Date("2022-06-01"),
    },
    svelte: {
        name: "Svelte",
        url: "https://svelte.dev/",
        description:
            "An innovative framework that shifts much of the work to compile time, producing highly optimized vanilla JavaScript at the end, for faster runtime performance and less code.",
        date: new Date("2024-02-01"),
    },
    node: {
        name: "Node.js",
        url: "https://nodejs.org/",
        description:
            "A runtime environment that allows execution of JavaScript on the server side, enabling the development of scalable network applications.",
        date: new Date("2021-08-01"),
    },
    spring: {
        name: "Spring Boot",
        url: "https://spring.io/",
        description:
            "A convention-over-configuration solution for creating stand-alone, production-grade Spring based applications with minimal effort.",
        date: new Date("2021-11-01"),
    },
    vue: {
        name: "Vue",
        url: "https://vuejs.org/",
        description:
            "A progressive JavaScript framework used for building UIs and single-page applications. It’s designed to be incrementally adoptable.",
        date: new Date("2023-02-01"),
    },
    netcore: {
        name: ".NET Core",
        url: "https://dotnet.microsoft.com/",
        description:
            "A cross-platform, open-source framework for building modern, cloud-based, internet-connected applications such as web apps, IoT apps, and mobile backends.",
        date: new Date("2022-02-01"),
    },
    tailwind: {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        description:
            "A utility-first CSS framework that allows for rapid UI development, with a focus on composability and maintainability.",
        date: new Date("2022-08-01"),
    },
    discordjs: {
        name: "Discord.js",
        url: "https://discord.js.org/",
        description:
            "A JavaScript library for interacting with the Discord API, allowing for the creation of bots and applications.",
        date: new Date("2021-08-01"),
    },
    mongodb: {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        description:
            "A general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
        date: new Date("2021-08-01"),
    },
    prisma: {
        name: "Prisma",
        url: "https://www.prisma.io/",
        description:
            "A modern database toolkit that makes database access easy with an auto-generated query builder and a declarative data modeling.",
        date: new Date("2022-10-01"),
    },
    bun: {
        name: "Bun",
        url: "https://bun.sh/",
        description: "Bun is a fast JavaScript all-in-one toolkit, a modern alternative to Node.js.",
        date: new Date("2023-11-01"),
    },
    openai: {
        name: "OpenAI",
        url: "https://openai.com/",
        description:
            "An SDK to interact with GPT-3, GPT-4, DALL-E and so much more, allowing for the creation of AI-powered applications.",
        date: new Date("2023-10-01"),
    },
    bigcommerce: {
        name: "BigCommerce",
        url: "https://www.bigcommerce.com/",
        description:
            "A SaaS e-commerce platform that allows merchants to create an online store and sell products online.",
        date: new Date("2023-01-01"),
    },
    algolia: {
        name: "Algolia",
        url: "https://www.algolia.com/",
        description: "A search and discovery API for building powerful, lightning-fast search into your applications.",
        date: new Date("2023-02-01"),
    },
    contentful: {
        name: "Contentful",
        url: "https://www.contentful.com/",
        description: "A headless CMS that allows you to create, manage and distribute content to any platform.",
        date: new Date("2023-02-01"),
    },
} as Record<string, TechnologyItem>;

export default function Technology({ className, name }: { className?: string; name: string }) {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const tech = technologies[name] as TechnologyItem | undefined;
    if (!tech) return null;

    const hoverContent = (
        <HoverCardContent className="z-50">
            <h4 className="text-sm font-semibold">{tech.name}</h4>
            <p className="text-sm">{tech.description}</p>
            <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">{timeBetween(tech.date)} of experience</span>
            </div>
        </HoverCardContent>
    );

    function timeBetween(date: Date) {
        const today = new Date();
        let years = today.getFullYear() - date.getFullYear();
        let months = today.getMonth() - date.getMonth();

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        const totalYears = years + months / 12;
        if (totalYears < 1) {
            return `${months} month${months === 1 ? "" : "s"}`;
        } else {
            const roundedTotalYears = Math.round(totalYears);
            return `${roundedTotalYears} year${roundedTotalYears === 1 ? "" : "s"}`;
        }
    }

    if (!isMounted) return null;
    return (
        <HoverCard>
            <HoverCardTrigger
                className={cn("flex h-24 w-24 items-center justify-between rounded-lg bg-white p-4", className)}
            >
                <Image src={`/icons/${name}.svg`} alt={`Icon of the skill: ${tech.name}`} height={128} width={128} />
            </HoverCardTrigger>
            {ReactDOM.createPortal(hoverContent, document.body)}
        </HoverCard>
    );
}
