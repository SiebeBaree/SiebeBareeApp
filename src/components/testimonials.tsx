"use client";

import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
    {
        name: "Brent Eerlingen",
        position: "E-commerce consultant",
        companyLogo: "elision.svg",
        profileImage: "BrentEerlingen.png",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci.",
    },
    {
        name: "Jan Castermans",
        position: "Teacher",
        companyLogo: "pxl.svg",
        profileImage: "JanCastermans.png",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci.",
    },
    {
        name: "Olivier Jammaers",
        position: "Student",
        companyLogo: "pxl.svg",
        profileImage: "OlivierJammaers.png",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci.",
    },
    {
        name: "Siemen Paesmans",
        position: "HR Manager",
        companyLogo: "elision.svg",
        profileImage: "SiemenPaesmans.png",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci.",
    },
    {
        name: "Iris Houet",
        position: "My Girlfriend",
        companyLogo: "kul.png",
        profileImage: "BrentEerlingen.png",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci.",
    },
];

export default function Testimonials() {
    return (
        <div className="my-48">
            <h2 className="mx-auto mb-20 max-w-[500px] text-center text-5xl font-semibold">
                What other people are saying of me
            </h2>

            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[370px]"
                cardsEffect={{
                    slideShadows: false,
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-1">
                            <Card className="flex h-[480px] flex-col rounded-xl bg-card">
                                <CardHeader>
                                    <Image
                                        className="h-20 w-20 rounded-lg"
                                        src={`/testimonials/profiles/${testimonial.profileImage}`}
                                        alt={`Profile image of ${testimonial.name}`}
                                        width={80}
                                        height={80}
                                    />
                                </CardHeader>
                                <CardContent className="flex-grow">{testimonial.content}</CardContent>
                                <CardFooter className="flex w-full items-center justify-between rounded-b-xl bg-black/50 py-4">
                                    <div>
                                        <h5 className="-mb-1 text-xl font-medium">{testimonial.name}</h5>
                                        <p className="text-sm">{testimonial.position}</p>
                                    </div>

                                    <Image
                                        src={`/testimonials/companies/${testimonial.companyLogo}`}
                                        alt={`Company logo of ${testimonial.name}`}
                                        className="h-8"
                                        width={100}
                                        height={32}
                                    />
                                </CardFooter>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
