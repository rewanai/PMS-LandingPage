"use client";

import {
    BarChart,
    Bell,
    Bot,
    Check,
    List,
    MessageCircleOff,
    MessageSquare,
    Target,
    Users,
    X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { shiba } from "@/lib/fonts";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const Compare1 = () => {
    return (
        <section id="features" className="py-32 bg-accent/45">
            <div className="mx-auto w-full max-w-[80rem] px-6">
                {/* Heading */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0}
                    className="mx-auto flex max-w-xl flex-col items-center gap-5 pb-20 text-center"
                >
                    <h1
                        className={cn(
                            "text-3xl font-medium text-pretty md:text-5xl",
                            shiba.className
                        )}
                    >
                        The Best way to optimize your sales team
          </h1>
                    <p className="text-muted-foreground">
                        We use AI to automate the process of finding and contacting prospects
                        and then follow up with them.
          </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 md:gap-5">
                    {/* Without Rewan PMS */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        className="flex flex-col items-center gap-5 md:gap-9"
                    >
                        <div className="flex items-center gap-3">
                            <X className="h-6 text-red-400" />
                            <p className="text-xl font-medium">Without Rewan PMS</p>
                        </div>
                        <div className="h-full w-full bg-white rounded-md border border-white p-9">
                            <ul className="flex flex-col gap-8 font-medium text-primary">
                                <li className="flex items-start gap-4">
                                    <Users className="h-6 shrink-0" />
                                    <p>Scattered spreadsheets and disconnected tools</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MessageSquare className="h-6 shrink-0" />
                                    <p>Manual updates that waste hours each week</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <List className="h-6 shrink-0" />
                                    <p>Missed deadlines from poor visibility</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MessageCircleOff className="h-6 shrink-0" />
                                    <p>Communication breakdowns across teams</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* With Rewan PMS */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={2}
                        className="flex flex-col items-center gap-5 md:gap-9"
                    >
                        <div className="flex items-center gap-3">
                            <Check className="h-6 text-lime-400" />
                            <p className="text-xl font-medium">With Rewan PMS</p>
                        </div>
                        <div className="w-full h-full rounded-md">
                            <div className="rounded-sm bg-background rounded-md border p-9">
                                <ul className="flex flex-col gap-8 font-medium">
                                    <li className="flex items-start gap-4">
                                        <Target className="h-6 shrink-0" />
                                        <p>Centralized hub for all tasks, files & workflows</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Bot className="h-6 shrink-0" />
                                        <p>AI-powered planning & real-time progress tracking</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Bell className="h-6 shrink-0" />
                                        <p>Automated alerts to prevent delays</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <BarChart className="h-6 shrink-0" />
                                        <p>Seamless collaboration across teams and clients</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { Compare1 };
