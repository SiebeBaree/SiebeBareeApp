import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

export function TechStack() {
    return (
        <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden">
            <span className="to-grey-300/80 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black bg-clip-text text-center text-[4rem] font-semibold leading-none text-transparent">
                Technologies
            </span>

            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={15}
                radius={80}
            >
                <Icons.svelte />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.vue />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={5}
                radius={80}
            >
                <Icons.spring />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={0}
                radius={80}
            >
                <Icons.netcore />
            </OrbitingCircles>

            <OrbitingCircles className="border-none bg-transparent" reverse radius={160} duration={20} delay={14}>
                <Icons.nextjs size={50} />
            </OrbitingCircles>
            <OrbitingCircles className="border-none bg-transparent" reverse radius={160} duration={20} delay={7}>
                <Icons.react size={50} />
            </OrbitingCircles>
            <OrbitingCircles className="border-none bg-transparent" reverse radius={160} duration={20} delay={0}>
                <Icons.go size={70} />
            </OrbitingCircles>
        </div>
    );
}

const Icons = {
    svelte: ({ size = 30 }) => <Image src="/icons/svelte.svg" alt="Logo of Svelte" height={size} width={size} />,
    vue: ({ size = 30 }) => <Image src="/icons/vue.svg" alt="Logo of Vue" height={size} width={size} />,
    spring: ({ size = 30 }) => <Image src="/icons/spring.svg" alt="Logo of Spring Boot" height={size} width={size} />,
    netcore: ({ size = 30 }) => <Image src="/icons/netcore.svg" alt="Logo of .NET Core" height={size} width={size} />,
    nextjs: ({ size = 30 }) => <Image src="/icons/nextjs.svg" alt="Logo of Next.js" height={size} width={size} />,
    react: ({ size = 30 }) => <Image src="/icons/react.svg" alt="Logo of React" height={size} width={size} />,
    go: ({ size = 70 }) => <Image src="/icons/go.svg" alt="Logo of Go" height={size} width={size} />,
};
