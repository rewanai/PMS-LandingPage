"use client";

import { BrainCircuit, Zap, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import { shiba } from "@/lib/fonts";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const Feature130 = () => {
    return (
        <section id="whyUs" className="py-32">
            <div className="mx-auto w-full max-w-[80rem] px-6">
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0}
                    className="mb-4 text-sm text-muted-foreground lg:text-base"
                >
                    OUR VALUES
        </motion.p>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                    className={cn("text-3xl font-medium lg:text-5xl", shiba.className)}
                >
                    Why Choose Rewan PMS?
        </motion.h2>

                <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
                    {[
                        {
                            icon: <BrainCircuit className="size-6 stroke-white" />,
                            title: "AI-Driven Efficiency",
                            desc: "Save time with automation that eliminates repetitive tasks and keeps projects moving faster.",
                        },
                        {
                            icon: <ListChecks className="size-6 stroke-white" />,
                            title: "Consistent Outcomes",
                            desc: "Ensure accuracy and professionalism across all projects—from small initiatives to enterprise operations.",
                        },
                        {
                            icon: <Zap className="size-6 stroke-white" />,
                            title: "Smarter Decisions",
                            desc: "Leverage AI insights to anticipate risks, optimize resources, and continuously improve performance.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={i + 2}
                            className="rounded-lg bg-accent/45 p-5"
                        >
                            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary">
                                {item.icon}
                            </span>
                            <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                            <p className="leading-7 text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Feature130 };
