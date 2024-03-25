import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/contact-form";

export default function Footer() {
    return (
        <footer className="container mx-auto flex items-center justify-between p-4 text-muted">
            <p>© 2024 Siebe Barée - All Rights Reserved</p>
            <div>
                <Dialog>
                    <DialogTrigger>
                        <div className="rounded-lg px-5 py-1 transition-all duration-100 ease-in-out hover:bg-gray-300">
                            <p>Contact Me</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <ContactForm />
                    </DialogContent>
                </Dialog>
            </div>
        </footer>
    );
}
