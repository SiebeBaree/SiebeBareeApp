import ArrowIcon from "@/icons/ArrowIcon";
import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <div id="home" className="custom-container flex flex-col justify-center h-screen relative">
            <ArrowIcon color="var(--color-text-supersoft)"
                       className="absolute bottom-5 left-1/2 transform hidden lg:block"/>

            <div className="flex items-center mb-32 md:mb-44 flex-col-reverse md:flex-row">
                <div>
                    <h2 className="text-3xl lg:text-4xl mb-2" data-aos="fade-up" data-aos-delay="300">Hello There, I
                        am</h2>
                    <h1 className="text-6xl lg:text-8xl text-selected mb-6" data-aos="fade-up"
                        data-aos-delay="500">Siebe Barée</h1>
                    <p className="text-muted text-lg" data-aos="fade-up" data-aos-delay="700">I’m a full-stack developer
                        that has a passion for Web Development and TypeScript. I love challenging myself with new
                        projects.</p>
                </div>

                <Image src="/logo.png" alt="Profile picture of Siebe Barée" width={250} height={250}
                       className="my-5 w-56 h-56 block xl:hidden mb-16 md:mb-0" priority/>
            </div>

            <div className="flex gap-16 md:gap-32">
                <div className="flex flex-col gap-2">
                    <h1 className="text-selected text-4xl sm:text-6xl" data-aos="fade-right"
                        data-aos-delay="500">3+</h1>
                    <p className="text-muted uppercase w-32" data-aos="fade-right" data-aos-delay="700">Years of
                        experience</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-selected text-4xl sm:text-6xl" data-aos="fade-left"
                        data-aos-delay="500">10.000+</h1>
                    <p className="text-muted uppercase w-32" data-aos="fade-left" data-aos-delay="700">HOURS OF
                        PRACTICE</p>
                </div>
            </div>
        </div>
    );
}