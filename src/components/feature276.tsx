"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import {
    Bot,
    ChartColumn,
    ListChecks,
    FileText,
    Zap,
    Scaling,
} from "lucide-react";
import { shiba } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
const Feature276 = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const items = [
        {
            title: "Invoices & Expenses",
            description: "Auto-generate, categorize, and track payments effortlessly",
            icon: FileText, // or a similar invoice icon
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
        {
            title: "Payroll",
            description: "Run payroll in seconds with full compliance",
            icon: Zap, // payroll/check icon
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
        {
            title: "Compliance",
            description: "Built-in VAT & labor law checks to stay audit-ready",
            icon: ListChecks, // legal/compliance icon
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
        {
            title: "Reporting",
            description: "Real-time dashboards and plain-language explanations",
            icon: ChartColumn,
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
        {
            title: "AI Assistance",
            description: "Ask Ghazy anything and get instant insights",
            icon: Bot,
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
        {
            title: "Scalability",
            description: "Grows with your organization without extra headcount",
            icon: Scaling,
            color: "text-accent",
            bgColor: "bg-primary/90",
        },
    ];


    return (
        <section id="features" className=" min-h-[60vh] overflow-hidden py-32">
            <div className="mx-auto w-full max-w-screen-xl px-6 flex flex-col items-center justify-center">
                <div className="max-w-5xl mx-auto text-center mb-12">

                    <Badge variant="none">Features</Badge>
                    <h2
                        className={`${shiba.className} mb-12 mx-auto max-w-2xl text-4xl font-normal text-center sm:text-5xl`}
                    >
                        Features That Power Your Finance
                     </h2>


                    {/* ✅ Centered Grid */}
                    <div className="relative grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                                            className={cn(
                                                "absolute inset-0 block h-full w-full rounded-2xl",
                                                item.bgColor
                                            )}
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
                                    color={item.color}
                                    bgColor={item.bgColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export { Feature276 };

const Card = ({
    className,
    title,
    description,
    bgColor,
    icon: Icon,
    color,
}: {
    className?: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
    color: string;
}) => {
    return (
        <div
            className={cn(
                "bg-accent/45 relative z-20 flex h-full flex-col items-start justify-start gap-2 rounded-3xl p-5",
                className
            )}
        >
            <div
                className={cn(
                    "bg-accent size-15 mb-12 flex items-center justify-center rounded-2xl",
                    color,
                    bgColor
                )}
            >
                <Icon className="size-5" />
            </div>
            <h1 className="text-xl font-medium tracking-tight">{title}</h1>
            <p className="text-muted-foreground/50 text-sm text-left">{description}</p>
        </div>
    );
};
