import { Globe2Icon, type LucideIcon, PlusCircleIcon } from "lucide-react";
import Technology from "./technology";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";

type Project = {
    name: string;
    description: string;
    techstack?: string[];
    image?: string;
    cta?: {
        name: string;
        url: string;
        icon: string | LucideIcon;
    }[];
};

const projects: Project[] = [
    {
        name: "Coinz",
        description:
            "Coinz is een applicatie om te gebruiken binnen Discord. Coinz biedt verschillende functies om plezier te maken zoals blackjack, een (virtueel) bedrijf te starten, beleggen in aandelen en crypto en dat allemaal met virtueel geld. Ondertussen meer dan 600.000 gebruikers",
        techstack: ["nextjs", "discordjs", "tailwind", "mongodb", "bun"],
        image: "/projects/project1.png",
        cta: [
            {
                name: "Visit Website",
                url: "https://coinzbot.xyz/",
                icon: Globe2Icon,
            },
            {
                name: "Source code",
                url: "https://github.com/SiebeBaree/Coinz",
                icon: "/GitHub.svg",
            },
        ],
    },
    {
        name: "E-commerce store",
        description:
            "Als stage heb ik een e-commerce store gemaakt met SvelteKit en BigCommerce en met in totaal 12 externe integraties.",
        techstack: ["svelte", "tailwind", "bigcommerce", "algolia", "contentful"],
        image: "/projects/ecommerce_store.png",
        cta: [
            {
                name: "Visit Website",
                url: "https://sveltekit-webshop-demo.vercel.app/",
                icon: Globe2Icon,
            },
        ],
    },
    {
        name: "SiebeGPT",
        description:
            "SiebeGPT is een ChatGPT clone die ik heb gemaakt met OpenAI's GPT-3.5. Het is een chatbot die je kan helpen met verschillende dingen zoals het maken van een website, het schrijven van een blogpost, enz.",
        techstack: ["nextjs", "prisma", "tailwind", "mongodb", "openai"],
        cta: [
            {
                name: "Source code",
                url: "https://github.com/SiebeBaree/SiebeGPT",
                icon: "/GitHub.svg",
            },
        ],
    },
    {
        name: "HabitFlow",
        description:
            "HabitFlow is een klein bedrijf wat ik heb ontwikkeld in 1 week (een micro SaaS). HabitFlow heeft een populaire habit tracker van het boek Atomic Habits gedigitaliseerd.",
        techstack: ["nextjs", "react", "tailwind", "node"],
        image: "/projects/habitflow.png",
        cta: [
            {
                name: "Visit Website",
                url: "https://habitflow.pro/",
                icon: Globe2Icon,
            },
        ],
    },
    {
        name: "iCount",
        description:
            "iCount is gemaakt toen ik in het 5de middelbaar zat. Het is een kleine minigame in Discord om zo een community op te wekken. De bot had meer dan 70.000 gebruikers.",
    },
    {
        name: "Previous Portfolio",
        description:
            "Voor I-Talent had ik al een portfolio website online staan voor potentiële werkgevers of klanten als freelancer",
        techstack: ["nextjs", "react", "tailwind", "node"],
        image: "/projects/siebebareev1.png",
        cta: [
            {
                name: "Visit Website",
                url: "https://v1.siebebaree.com/",
                icon: Globe2Icon,
            },
            {
                name: "Source code",
                url: "https://github.com/SiebeBaree/SiebeBareeApp/tree/v1",
                icon: "/GitHub.svg",
            },
        ],
    },
];

export default function Projects() {
    return (
        <div className="my-48 flex flex-col items-center justify-center" id="projects">
            <h2 className="mb-20 text-5xl font-semibold">My Work</h2>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Dialog>
            <DialogTrigger className="group relative z-0 h-[300px] w-full overflow-hidden rounded-xl border bg-card">
                {project.image ? (
                    <>
                        <Image
                            src={project.image}
                            alt={`Screenshot of the homepage of ${project.name}`}
                            height={300}
                            width={676}
                            className="object-container h-full w-full"
                        ></Image>
                        <PlusCircleIcon className="absolute right-4 top-4 h-8 w-8 text-transparent transition-all duration-200 ease-in-out group-hover:text-foreground" />
                    </>
                ) : (
                    <div className="flex h-full w-full items-center justify-center gap-4">
                        <h2 className="text-4xl font-semibold">{project.name}</h2>
                        <PlusCircleIcon className="h-8 w-8 text-foreground" />
                    </div>
                )}

                {project.techstack && project.techstack.length > 0 && (
                    <div className="absolute bottom-4 right-4 hidden animate-slide-in-up gap-3 group-hover:flex">
                        {project.techstack.map((tech) => (
                            <Technology key={tech} name={tech} className="h-12 w-12 p-2" />
                        ))}
                    </div>
                )}
            </DialogTrigger>
            <DialogContent className="container w-full max-w-[1000px] p-0">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={`Screenshot of the homepage of ${project.name}`}
                        height={500}
                        width={1126}
                        className="object-container h-[500px] w-full border-b bg-card shadow-sm"
                        style={{
                            borderRadius: "inherit",
                        }}
                    ></Image>
                )}

                <div className="my-12 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-6xl font-semibold">{project.name}</h2>
                    <p className="w-2/3 min-w-[350px] text-lg text-muted-foreground">{project.description}</p>

                    {project.cta && (
                        <div className="mt-4 flex items-center justify-center gap-3">
                            {project.cta.map((cta) => (
                                <Link key={cta.name} href={cta.url}>
                                    <Button className="flex items-center justify-center gap-2">
                                        {typeof cta.icon === "string" ? (
                                            <Image
                                                src={cta.icon}
                                                alt={`Icon for ${cta.name}`}
                                                height={20}
                                                width={20}
                                                style={{
                                                    filter: "invert(1)",
                                                }}
                                            />
                                        ) : (
                                            <cta.icon className="h-5 w-5" />
                                        )}
                                        {cta.name}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
