"use client";

import { cn } from "@/lib/utils";
import { shiba } from "@/lib/fonts";
import { BookOpen, PenTool, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const Hero68 = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="bg-background py-12 md:py-32">
            <div className="mx-auto w-full max-w-[80rem] px-6">
                <div className="flex flex-col gap-4 md:flex-row">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-6">
                        <motion.h1
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={0}
                            className={cn("text-4xl font-medium lg:text-6xl", shiba.className)}
                        >
                            Manage Projects Smarter with Rewan PMS
            </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                            className="text-muted-foreground text-lg lg:max-w-[80%]"
                        >
                            AI-powered project management that helps you plan, execute, and
                            deliver with precision. Streamline workflows, keep teams aligned,
                            and achieve measurable results—faster.
            </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={2}
                            className="relative z-10 flex flex-wrap items-center gap-6"
                        >
                            <a href="#how">
                                <Button variant="default" size="sm">
                                    Explore Rewan PMS <ChevronRight />
                                </Button>
                            </a>

                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={3}
                    >
                        <div className="bg-accent relative mx-auto mt-28 h-[21.25rem] w-[21.25rem] rounded-full md:mx-0 md:mt-0 lg:h-[25rem] lg:w-[25rem]">
                            <div className="absolute bottom-0 w-[21.25rem] overflow-hidden rounded-full lg:h-[25rem] lg:w-[25rem]">
                                <img
                                    src="F3.png"
                                    alt=""
                                    className="w-full scale-100 object-cover object-center"
                                />
                            </div>

                            {/* floating avatars */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={4}
                                className="bg-background absolute -right-1 bottom-1 flex w-[17.5rem] items-center justify-center gap-1 rounded-full px-4 py-3 shadow-md"
                            >
                                <div className="flex -space-x-[0.875rem]">
                                    {[
                                        {
                                            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                                            fallback: "AB",
                                        },
                                        {
                                            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                                            fallback: "CD",
                                        },
                                        {
                                            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                                            fallback: "EF",
                                        },
                                    ].map(({ src, fallback }, i) => (
                                        <Avatar
                                            key={i}
                                            className="flex h-12 w-12 shrink-0 rounded-full border-4 border-white object-cover"
                                        >
                                            <AvatarImage src={src} alt="" />
                                            <AvatarFallback>{fallback}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <div className="flex-1 text-sm text-gray-800">
                                    7000+ people already joined
                </div>
                            </motion.div>

                            {/* floating icons */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={5}
                                className="bg-primary absolute right-0 top-0 flex h-[6.25rem] w-[6.25rem] rotate-12 rounded-3xl border-8 border-white lg:h-[6.875rem] lg:w-[6.875rem]"
                            >
                                <BookOpen className="m-auto h-[2.5rem] w-[2.5rem] stroke-white lg:h-[3.125rem] lg:w-[3.125rem]" />
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={6}
                                className="bg-primary absolute -left-10 top-1/3 flex h-[6.25rem] w-[6.25rem] -rotate-12 rounded-3xl border-8 border-white lg:h-[6.875rem] lg:w-[6.875rem]"
                            >
                                <PenTool className="m-auto h-[3.5rem] w-[3.5rem] -rotate-90 fill-white lg:h-[4.5rem] lg:w-[4.5rem]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* STATS */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={7}
                    className="mt-20 rounded-3xl border p-6"
                >
                    <div className="flex w-full flex-col md:flex-row">
                        {[
                            {
                                value: "100%",
                                title: "Centralized Workflows",
                                desc: "No more scattered spreadsheets",
                            },
                            {
                                value: "30+",
                                title: "AI Assistants",
                                desc: "Work smarter with intelligent support",
                            },
                            {
                                value: "80%",
                                title: "Faster Project Delivery",
                                desc: "AI keeps projects on schedule",
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={8 + i}
                                className={`flex flex-1 flex-col gap-1 p-6 ${
                                    i < 2
                                        ? "border-b-[1px] md:border-b-0 md:border-r-[1px]"
                                        : ""
                                    }`}
                            >
                                <div className="text-primary text-2xl font-medium lg:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground font-medium lg:text-lg">
                                    {stat.title}
                                </div>
                                <div className="text-muted-foreground text-lg lg:max-w-[80%]">
                                    {stat.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* VIDEO MODAL */}
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>Presentation Video</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/your-video-id"
                            title="Presentation Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export { Hero68 };
