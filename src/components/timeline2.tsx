"use client";

import React from "react";
import {
    ArrowUp,
    ChartNoAxesColumnIncreasing,
    Share,
    X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { SparklesCore } from "@/components/aceternity/sparkles";

const analyticsSection = {
    headline: "Smarter Accounting",
    leftCard: {
        title: "AI-Powered Insights",
        description:
            "Ghazy continuously monitors your financial health, flags issues, and provides plain-language explanations — so you stay ahead of problems before they cost you money.",
        highlights: [
            "99% payroll accuracy every cycle",
            "2× faster month-end closing",
            "70% less time spent on expense approvals",
        ],
        cta: {
            label: "View Detailed Reports",
            link: "#",
        },
    },
    rightCard: {
        title: "Finance Performance Snapshot",
        description:
            "Our organization runs smoother with Rewan ACCT + Ghazy — faster collections, fewer errors, and real-time visibility into every transaction.",
        chart: {
            label: "Monthly Performance",
            subtitle: "Last 6 Months",
            data: [
                { month: "Jan", value: 80 },
                { month: "Feb", value: 120 },
                { month: "Mar", value: 110 },
                { month: "Apr", value: 140 },
                { month: "May", value: 100 },
                { month: "Jun", value: 130 },
            ],
        },
        stats: [
            {
                label: "Invoices Paid on Time",
                value: "95%",
                trend: "up",
            },
            {
                label: "Late Payment Penalties",
                value: "-40%",
                trend: "down",
            },
            {
                label: "Hours Saved Monthly",
                value: "50+",
                trend: "up",
            },
        ],
    },
};


const Timeline2 = () => {
    return (
        <section className="bg-accent/55 relative w-full overflow-hidden py-32 text-foreground light">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Title */}
                <div className="w-full max-w-lg text-center">
                    <h1 className="text-primary relative z-20 text-5xl font-semibold tracking-tighter md:text-6xl lg:text-7xl">
                        {analyticsSection.headline}
                    </h1>
                </div>
                <div className="relative mb-10 mt-5 h-40 w-[40rem]">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />


                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={200}
                        className="h-full w-full"
                        particleColor="#341539"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className=" absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_130px_at_top,transparent_20%,white)]"></div>
                </div>
                <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
                    {/* Left Card */}
                    <div className="flex h-fit flex-col gap-4 rounded-lg bg-background/50 p-4">
                        <div className="flex items-center gap-2 rounded-lg border bg-card p-4 shadow-sm">
                            <ChartNoAxesColumnIncreasing className="size-6" />
                            <h1 className="text-xl font-bold sm:text-2xl">
                                {analyticsSection.leftCard.title}
                            </h1>
                        </div>

                        <div className="rounded-lg border bg-card p-4 shadow-sm">
                            <p className="text-sm text-muted-foreground mb-4">
                                {analyticsSection.leftCard.description}
                            </p>
                            <ul className="mb-4 list-disc pl-5 text-sm">
                                {analyticsSection.leftCard.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <Button asChild>
                                <a href={analyticsSection.leftCard.cta.link}>
                                    {analyticsSection.leftCard.cta.label}
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="mt-0 flex flex-col gap-4 rounded-lg bg-background/50 p-4">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="mb-2 text-2xl font-semibold">
                                {analyticsSection.rightCard.title}
                            </h3>
                            <p className="mb-6 text-muted-foreground">
                                {analyticsSection.rightCard.description}
                            </p>

                            {/* Chart */}
                            <Card className="mb-6">
                                <CardHeader className="flex flex-row items-center">
                                    <CardTitle className="text-xl">
                                        {analyticsSection.rightCard.chart.label}
                                    </CardTitle>
                                    <CardDescription className="ml-auto">
                                        <Badge className="bg-green-300 text-green-600 hover:bg-green-300/80">
                                            {analyticsSection.rightCard.chart.subtitle}
                                        </Badge>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer
                                        config={{ value: { label: "Value" } }}
                                        className="h-[296px] w-full"
                                    >
                                        <BarChart data={analyticsSection.rightCard.chart.data}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                tickMargin={10}
                                                axisLine={false}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent indicator="dashed" />}
                                            />
                                            <Bar dataKey="value" radius={4} />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>

                            {/* Stats */}
                            <div className="grid gap-4 md:grid-cols-3">
                                {analyticsSection.rightCard.stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col rounded-lg border bg-card p-4 shadow-sm"
                                    >
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-3xl font-bold">{stat.value}</h2>
                                            {stat.trend === "up" ? (
                                                <ArrowUp className="size-6 text-success" />
                                            ) : (
                                                    <ArrowUp className="size-6 rotate-180 text-destructive" />
                                                )}
                                        </div>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Timeline2 };
