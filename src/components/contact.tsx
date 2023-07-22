import styles from "@/styles/components/contact.module.css";
import ContactIcon from "@/icons/ContactIcon";
import SendIcon from "@/icons/SendIcon";
import React, {FormEvent, useEffect, useState} from "react";
import Link from "next/link";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import DiscordIcon from "@/icons/DiscordIcon";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const clickHandler = async (e: FormEvent) => {
        e.preventDefault();

        const button = document.querySelector('button[type="submit"]');
        if (button !== null) {
            button.setAttribute('disabled', 'true');
        }

        await new Promise(r => setTimeout(r, 1));

        if (button !== null) {
            button.removeAttribute('disabled');
        }

        // setName('');
        // setEmail('');
        // setSubject('');
        // setMessage('');
        //
        // const elements = document.getElementsByClassName('input-field');
        // for (const input of elements) {
        //     const label = input.nextElementSibling;
        //     if (label === null) continue;
        //     label.classList.remove(styles.active);
        // }
    }

    useEffect(() => {
        const elements = document.getElementsByClassName('input-field');

        for (const input of elements) {
            const label = input.nextElementSibling

            if (label === null || !(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) {
                continue;
            }

            input.addEventListener('input', function () {
                if (input.value.trim() !== '') {
                    label.classList.add(styles.active);
                } else {
                    label.classList.remove(styles.active);
                }
            });
        }
    }, []);

    return (
        <div className="pt-16 custom-container">
            <div id="contact" className="section-header" data-aos="fade-up">
                <div className="section-start">
                    <ContactIcon color="var(--color-text)"/>
                    <p className="uppercase">CONTACT</p>
                </div>
            </div>

            <h1 className="section-title" data-aos="fade-up">
                Let&apos;s discuss <span className="text-selected">some things</span>
            </h1>

            <form onSubmit={(e) => clickHandler(e)} data-aos="fade-up">
                <div className="flex flex-col sm:flex-row w-full gap-8 mb-10">
                    <div className={`${styles.input} relative box-border flex flex-col w-full`}>
                        <input type="text" id="name" name="name" required={true}
                               value={name} onChange={(e) => setName(e.target.value)}
                               className="input-field relative pb-1 bg-transparent focus:outline-0"/>
                        <label htmlFor="name" className="text-muted absolute pointer-events-none top-1/2">Full
                            Name</label>
                    </div>

                    <div className={`${styles.input} relative box-border flex flex-col w-full`}>
                        <input type="email" id="email" name="email" required={true}
                               value={email} onChange={(e) => setEmail(e.target.value)}
                               className="input-field relative pb-1 bg-transparent focus:outline-0"/>
                        <label htmlFor="email" className="text-muted absolute pointer-events-none top-1/2">Email</label>
                    </div>
                </div>

                <div className={`${styles.input} relative box-border flex flex-col w-full mb-10`}>
                    <input type="text" id="subject" name="subject" required={true}
                           value={subject} onChange={(e) => setSubject(e.target.value)}
                           className="input-field relative pb-1 bg-transparent focus:outline-0"/>
                    <label htmlFor="subject" className="text-muted absolute pointer-events-none top-1/2">Subject</label>
                </div>

                <div className={`${styles.inputTextArea} relative box-border flex flex-col w-full mb-8`}>
                    <textarea name="message" id="message" cols={30} rows={3} required={true}
                              value={message} onChange={(e) => setMessage(e.target.value)}
                              className="input-field relative pb-1 bg-transparent focus:outline-0"/>
                    <label htmlFor="message" className="text-muted absolute pointer-events-none top-1/2">Message</label>
                </div>

                <div className="mb-20 flex justify-between">
                    <div className={`${styles.ctaButtons} flex flex-col sm:flex-row items-center gap-3`}>
                        <button type="submit" className="rounded-md flex justify-center items-center gap-2 px-5 sm:px-10 py-1">
                            <SendIcon color="var(--color-text)"/>
                            <p className="font-bold uppercase">Send Message</p>
                        </button>

                        <p>or <a href="mailto:siebe@baree.be" className="text-selected underline">siebe@baree.be</a></p>
                    </div>

                    <div className="flex xl:hidden gap-3 sm:gap-5">
                        <Link href="https://github.com/SiebeBaree" target="_blank"
                              className={`${styles.icon} rounded-full border-0 sm:border-2 p-2 sm:p-3 flex`}>
                            <GitHubIcon color="var(--color-text-soft)"/>
                        </Link>

                        <Link href="https://www.linkedin.com/in/siebe-baree/" target="_blank"
                              className={`${styles.icon} rounded-full border-0 sm:border-2 p-2 sm:p-3 flex`}>
                            <LinkedInIcon color="var(--color-text-soft)"/>
                        </Link>

                        <Link href="#" target="_blank" className={`${styles.icon} rounded-full border-0 sm:border-2 p-2 sm:p-3 flex`}>
                            <DiscordIcon color="var(--color-text-soft)"/>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}