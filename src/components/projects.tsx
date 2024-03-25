import { Globe2Icon, PlusCircleIcon } from "lucide-react";
import Technology from "./technology";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";

const projects = [
    {
        name: "Coinz",
        description:
            "The most advanced Discord bot for managing your server's economy. With a wide range of features including a shop, daily rewards, and more. Coinz is the perfect bot for your server.",
        techstack: ["nextjs", "discordjs", "tailwind", "mongodb", "bun"],
    },
    {
        name: "Elision e-commerce webshop",
        description: "",
        techstack: ["svelte", "tailwind", "bigcommerce", "algolia", "contentful"],
    },
    {
        name: "SiebeGPT",
        description: "",
        techstack: ["nextjs", "prisma", "tailwind", "mongodb", "openai"],
    },
    {
        name: "MoviesApp",
        description: "",
        techstack: ["nextjs", "tailwind", "mongodb", "prisma"],
    },
];

export default function Projects() {
    return (
        <div className="my-48 flex flex-col items-center justify-center">
            <h2 className="mb-20 text-5xl font-semibold">My Work</h2>

            <div className="grid w-full grid-cols-2 gap-4">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        techstack={project.techstack}
                    />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ name, description, techstack }: { name: string; description: string; techstack: string[] }) {
    return (
        <Dialog>
            <DialogTrigger className="group relative z-0 h-[300px] w-full overflow-hidden rounded-xl border bg-card">
                <PlusCircleIcon className="absolute right-4 top-4 h-8 w-8 text-transparent transition-all duration-200 ease-in-out group-hover:text-muted" />

                <div className="absolute bottom-4 right-4 hidden animate-slide-in-up gap-3 group-hover:flex">
                    {techstack.map((tech) => (
                        <Technology key={tech} name={tech} className="h-12 w-12 p-2" />
                    ))}
                </div>
            </DialogTrigger>
            <DialogContent className="container w-full max-w-[1000px] p-0">
                <div
                    className="h-[500px] w-full bg-card"
                    style={{
                        borderRadius: "inherit",
                    }}
                ></div>

                <div className="my-12 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-6xl font-medium">{name}</h2>
                    <p className="w-2/3 min-w-[350px] text-lg text-muted">{description}</p>

                    <div className="mt-4 flex items-center justify-center gap-3">
                        <Link href="#">
                            <Button className="flex items-center justify-center gap-2">
                                <Globe2Icon className="h-5 w-5" />
                                Visit Website
                            </Button>
                        </Link>
                        <Link href="#">
                            <Button className="flex items-center justify-center gap-2">
                                <Image
                                    src="/GitHub.svg"
                                    alt="GitHub logo"
                                    height={20}
                                    width={20}
                                    style={{
                                        filter: "invert(1)",
                                    }}
                                />
                                Source code
                            </Button>
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
