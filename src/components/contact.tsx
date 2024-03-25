import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRightIcon } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
    return (
        <div className="mt-12 flex h-[400px] flex-col items-center justify-center rounded-lg border bg-card">
            <div className="flex max-w-[700px] flex-col gap-6 text-center">
                <h2 className="text-6xl font-medium">Interested in working together?</h2>
                <Dialog>
                    <DialogTrigger className="flex items-center justify-center">
                        <div className="rounded-lg px-5 py-1 transition-all duration-100 ease-in-out hover:bg-gray-300">
                            <p className="flex items-center justify-center text-lg">
                                Get in touch{" "}
                                <span>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </span>
                            </p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <ContactForm />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
