import Link from "next/link";

import { Code2Icon, HomeIcon, type LucideIcon, MailIcon, Menu, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
    {
        name: "Home",
        href: "#home",
        icon: HomeIcon,
    },
    {
        name: "About Me",
        href: "#about",
        icon: UserIcon,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: Code2Icon,
    },
    {
        name: "Contact Me",
        href: "#contact",
        icon: MailIcon,
    },
];

export default function Navbar() {
    return (
        <nav className="container mx-auto flex h-[60px] items-center justify-between gap-12 px-4 py-3">
            <h1 className="text-2xl font-bold">Siebe Barée</h1>

            <div className="hidden items-center gap-4 md:flex">
                {routes.map((route, index) => (
                    <NavItem key={index} name={route.name} href={route.href} />
                ))}
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0">
                    <div className="flex h-full flex-col bg-accent py-4 text-accent-foreground">
                        <div className="flex-1 px-3 py-2">
                            <Link href={"#home"} className="mb-12 flex items-center pl-3">
                                <h1 className="text-2xl font-bold">SiebeBaree</h1>
                            </Link>
                            <div className="flex flex-col gap-1">
                                {routes.map((route, index) => (
                                    <SidebarItem key={index} name={route.name} href={route.href} Icon={route.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

function NavItem({ name, href }: { name: string; href: string }) {
    return (
        <Link href={href} className="rounded-lg px-5 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300">
            {name}
        </Link>
    );
}

function SidebarItem({ name, href, Icon }: { name: string; href: string; Icon: LucideIcon }) {
    return (
        <Link
            href={href}
            className="group flex w-full cursor-pointer items-center justify-start rounded-lg p-3 font-medium transition hover:bg-black/10"
        >
            <Icon className="mr-4 h-6 w-6" />
            {name}
        </Link>
    );
}
