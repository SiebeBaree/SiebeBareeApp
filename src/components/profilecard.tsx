import styles from "@/styles/components/profilecard.module.css";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import DiscordIcon from "@/icons/DiscordIcon";
import EmailIcon from "@/icons/EmailIcon";

export default function ProfileCard() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div id="profilecard"
             className={`${styles.profileCard} hidden xl:flex flex-col items-center justify-center max-w-xs rounded-2xl p-7 z-50 w-full fixed left-5 top-1/2 -translate-y-1/2`}>
            <h1 className="text-4xl">Siebe Barée</h1>
            <p className="text-muted">Full-Stack Developer</p>

            <Image src="/logo.png" alt="Profile picture of Siebe Barée" width={250} height={250} className="my-5"
                   priority/>

            <a className="text-lg" href="mailto:siebe.baree@outlook.com">siebe.baree@outlook.com</a>
            <p className="text-xs text-muted mt-3">© 2023 SiebeBaree. All Rights Reserved</p>

            <div className="flex gap-7 my-7">
                <Link href="https://github.com/SiebeBaree" target="_blank"
                      className={`${styles.icon} rounded-full border-2 p-4 flex`}>
                    <GitHubIcon color="var(--color-text-soft)"/>
                </Link>

                <Link href="https://www.linkedin.com/in/siebe-baree/" target="_blank"
                      className={`${styles.icon} rounded-full border-2 p-4 flex`}>
                    <LinkedInIcon color="var(--color-text-soft)"/>
                </Link>
            </div>

            <button onClick={() => scrollTo("contact")}
                    className={`flex gap-2 w-full items-center justify-center py-3 rounded-2xl ${styles.contactButton}`}>
                <EmailIcon color="var(--color-text)"/>
                <p className="font-bold">CONTACT ME</p>
            </button>
        </div>
    );
}