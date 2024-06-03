import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { PlusCircleIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Event = {
    title: string;
    location: string;
    date: string;
    duration: string;
    description: string;
};

const AllEvents = [
    {
        title: "Seminaries",
        events: [
            {
                title: "IT Licious: Flutter",
                location: "PXL",
                date: "14 maart 2023",
                duration: "3 uur",
                description:
                    "Ik wou graag eens meer leren over Flutter dus heb ik dit seminarie gevolgd. We hebben er geleerd hoe flutter werkt onderliggend en hoe we een simpele todo-app konden maken met Flutter.",
            },
            {
                title: "Cloud Legends by Kabisa: Cloud Native Development",
                location: "PXL",
                date: "14 april 2023",
                duration: "3 uur",
                description:
                    "In dit seminarie hebben we geleerd hoe AWS werkt en waarom het handig. We hebben ook zelf een webapp gedeployed via AWS Amplify.",
            },
            {
                title: "Kabisa: Flutter",
                location: "PXL",
                date: "2 mei 2023",
                duration: "3 uur",
                description:
                    "Om nog meer te leren van Flutter heb ik een 2de seminarie over Flutter gevolgd. Meeste informatie was hetzelfde maar de theorie was grondiger en de nadruk lag meer op echte uses cases van Flutter.",
            },
            {
                title: "Sopra Steria: AI: ChatBot",
                location: "PXL",
                date: "16 mei 2023",
                duration: "3 uur",
                description:
                    "We hebben de geschiedenis van chatbots gezien (bv. Microsoft Clippy in 1997) en dan nu naar AI’s zoals ChatGPT. In de praktijk hebben we onze eigen AI chatbot gemaakt met een no-code tool.",
            },
            {
                title: "AE: Application observability",
                location: "PXL",
                date: "8 november 2023",
                duration: "3u30",
                description:
                    "Tijdens dit seminarie heb ik geleerd hoe je een eenvoudig observability-systeem opzet voor een applicatie, met gebruik van logs, metrics, en tracing.",
            },
            {
                title: "Cegeka: Dark launches and gradual release",
                location: "PXL",
                date: "14 november 2023",
                duration: "3u30",
                description:
                    "Ik heb verschillende release-strategieën onderzocht, zoals dark launches en gradual releases, en hoe deze toe te passen om de recovery tijd te minimaliseren bij productieproblemen.",
            },
            {
                title: "IBM: Quantum Computing, een demystificatie",
                location: "PXL",
                date: "22 maart 2023",
                duration: "3u30",
                description:
                    "Ik heb de basisbeginselen van Quantum Computing verkend, inclusief programmeren met Python en Qiskit, en deelgenomen aan praktische oefeningen op een echte Quantum computer.",
            },
            {
                title: "ACA group: DDD fundamentals",
                location: "PXL",
                date: "29 november 2023",
                duration: "3u30",
                description:
                    "Ik heb fundamentele concepten van Domain-Driven Design (DDD) geleerd en geoefend met technieken zoals event stroming om DDD toe te passen in projecten.",
            },
        ],
    },
    {
        title: "Innovatieroute",
        events: [
            {
                title: "Innovatieroute UI/UX",
                location: "PXL",
                date: "28 september 2023, 5 oktober 2023 en 19 oktober 2023",
                duration: "Elke dag van 9u-16u",
                description:
                    "Ik had al veel kennis van UI/UX maar ik wou weten wat ik nog kon bijleren bij echte bedrijven. We hebben hands on ervaringen gehad met de hele UX-flow en daarna gaan uittekenen in Figma (UI).",
            },
        ],
    },
    {
        title: "Personal Development",
        events: [
            {
                title: "Projectweek",
                location: "PXL",
                date: "13 – 17 februari 2023",
                duration: "5 dagen",
                description:
                    "Gedurende deze week heb ik mijn researchproject team ontmoet en hebben we een aantal POP sessies gehad. We hebben er ook geleerd hoe je in teamverband moet omgaan.",
            },
            {
                title: "POP Sessie: My Team and I",
                location: "Corda 7, Hasselt",
                date: "11 oktober 2023",
                duration: "3u",
                description:
                    "In deze POP-sessie heb ik geleerd over teamdynamiek en het Tuckman-model voor teamontwikkeling over de valkuilen, de voorwaarden voor teamwerk, en fasen die een team doorloopt.",
            },
            {
                title: "POP Sessie: POPing",
                location: "PXL",
                date: "13 – 17 februari 2023",
                duration: "3u",
                description:
                    "Tijdens deze POP-sessie gingen we in groep aan de slag om meer inzicht te krijgen in je eigen vaardigheden en de vaardigheden van je groepsgenoten en feedback geven.",
            },
            {
                title: "POP Sessie: Brein aan het werk! Niet storen!",
                location: "PXL",
                date: "13 – 17 februari 2023",
                duration: "3u",
                description:
                    "In deze POP sessie hebben we eens een kijkje genomen hoe verslaaf we zijn aan onze telefoon, hoe het brein werkt en hoe je kan winnen van de telefoon verslaving.",
            },
        ],
    },
    {
        title: "Extra Activiteiten",
        events: [
            {
                title: "BIP Rosenheim",
                location: "Rosenheim, Duitsland",
                date: "7 – 13 mei 2023",
                duration: "1 week",
                description:
                    "Tijdens deze BIP hebben we met studenten van Duitsland en Kroatie samengewerkt om een bedrijf in theorie op te stellen in de Metaverse en dit dan op het einde van de reis te pitchen aan een Jury.",
            },
            {
                title: "Cursus: Project Ondernemen",
                location: "PXL",
                date: "1 oktober 2021 – 31 mei 2022",
                duration: "2 semesters",
                description:
                    "Gedurende het 1ste jaar op PXL heb ik naast Toegepaste Informatica nog een 2de kleinere opleiding gevolgd over project ondernemen hoe we leren hoe we een bedrijf moeten opstarten en pitchen.",
            },
            {
                title: "Hackathon Cegeka: Pitch Please",
                location: "Corda 3, Hasselt",
                date: "1 december 2023 van 16u tot 24u ",
                duration: "8 uur",
                description:
                    "Tijdens deze hackathon hebben we met een team van 7 samen gebrainstormd voor een idee en daarna dit meermaals verder uitgewerkt om zo dit voor een finale jury te pitchen.",
            },
        ],
    },
];

export default function School() {
    return (
        <div className="my-48">
            {AllEvents.map((event) => (
                <div key={event.title} className="my-24 flex flex-col items-center justify-center">
                    <h2 className="mb-20 text-5xl font-semibold">{event.title}</h2>
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                        {event.events.map((item) => (
                            <ProjectCard key={item.title} event={item} />
                        ))}
                    </div>
                </div>
            ))}

            <div className="my-24 flex flex-col items-center justify-center">
                <h2 className="mb-20 text-5xl font-semibold">Uitgeschreven activiteiten</h2>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    <RedirectCard title="Coinz" href="/activiteiten/coinz" />
                    <RedirectCard title="HabitFlow" href="/activiteiten/habitflow" />
                    <RedirectCard title="BIP: Rosenheim" href="/activiteiten/rosenheim" />
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ event }: { event: Event }) {
    return (
        <Dialog>
            <DialogTrigger className="group relative z-0 h-[300px] w-full overflow-hidden rounded-xl border bg-card">
                <div className="flex h-full w-full items-center justify-center gap-4 p-4">
                    <h2 className="text-center text-4xl font-semibold">{event.title}</h2>
                    <PlusCircleIcon className="h-8 w-8 text-foreground" />
                </div>
            </DialogTrigger>
            <DialogContent className="container w-full max-w-[1000px] p-0">
                <div className="my-12 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-6xl font-semibold">{event.title}</h2>

                    <div className="flex items-center gap-2">
                        <NewBadge content={event.location} />
                        <NewBadge content={event.duration} />
                        <NewBadge content={event.date} />
                    </div>

                    <p className="w-2/3 min-w-[350px] text-lg text-muted-foreground">{event.description}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function NewBadge({ content }: { content: string }) {
    return <Badge>{content}</Badge>;
}

function RedirectCard({ title, href }: { title: string; href: string }) {
    return (
        <Link href={href} className="group relative z-0 h-[300px] w-full overflow-hidden rounded-xl border bg-card">
            <div className="flex h-full w-full items-center justify-center gap-4 p-4">
                <h2 className="text-center text-4xl font-semibold">{title}</h2>
                <PlusCircleIcon className="h-8 w-8 text-foreground" />
            </div>
        </Link>
    );
}
