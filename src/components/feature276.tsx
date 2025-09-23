"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    BrushCleaning,
    Clock,
    CodeXml,
    Plug2,
    Snowflake,
    Zap,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const Feature276 = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const items = [
        {
            title: "Unified HR Operations",
            description: "Manage employees, leave, and contracts in one place.",
            icon: Plug2,
        },
        {
            title: "Role-Based Access",
            description: "Dashboards and permissions tailored to every role.",
            icon: CodeXml,
        },
        {
            title: "Smart Leave & Attendance",
            description: "Approve requests fast and track attendance easily.",
            icon: Snowflake,
        },
        {
            title: "Contract & Compliance",
            description: "Store contracts securely and track expirations easily.",
            icon: Clock,
        },
        {
            title: "Training & Growth",
            description: "Create programs, track progress, and boost learning.",
            icon: BrushCleaning,
        },
        {
            title: "Analytics & Insights",
            description: "Use reports and dashboards to guide decisions.",
            icon: Zap,
        },
    ];

    return (
        <section className="overflow-hidden bg-accent/50 py-32">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4">
                <p className="bg-primary rounded-full px-4 py-1 text-xs text-white uppercase text-center">
                    Why Us
                </p>
                <h2 className="relative text-primary z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-6xl">
                    Why Choose Rewan HR
                </h2>
                <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
                    Empower your team with a smarter, more connected HR experience.
                </p>

                <div className="relative mt-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative block h-full w-full p-2"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="bg-muted-foreground/20 absolute inset-0 block h-full w-full rounded-2xl"
                                        layoutId="hoverBackground"
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </AnimatePresence>

                            <Card
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                className="flex flex-col items-center justify-center text-center"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Feature276 };

const Card = ({
    className,
    title,
    description,
    icon: Icon,
}: {
    className?: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}) => {
    return (
        <div
            className={cn(
                "bg-white relative z-20 flex h-full min-h-[180px] w-full max-w-[340px] mx-auto flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center",
                className,
            )}
        >
            <Icon className="text-primary mt-3 size-8 stroke-1" />
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    );
};
