"use client";


import {
    ArrowUp,
    ArrowUpRight,
    ChartCandlestick,
    ChartNoAxesColumnIncreasing,
    Share,
    X,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
// ✅ DATA
const analyticsSection = {
    headline: "See the Impact of Smarter Accounting",

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

const Pricing2 = () => {
    return (
        <section className="relative py-32">
            {/* ✅ Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/10)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/10)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,transparent_50%,hsl(var(--background))_100%)] bg-[size:32px_32px] opacity-20"></div>
            </div>

            {/* ✅ Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <h2 className="mb-10 mx-auto max-w-3xl text-center text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
                        {analyticsSection.headline}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* ✅ Left Card */}
                    <div className="flex h-fit flex-col gap-4 rounded-lg bg-background/50 p-4">
                        <div className="flex flex-row items-center gap-x-2 rounded-lg border bg-card p-4 shadow-sm">
                            <ChartNoAxesColumnIncreasing className="size-6" />
                            <h1 className="truncate text-xl font-bold sm:text-2xl">
                                Analytics Snapshot
              </h1>
                            <span className="ml-auto shrink-0 font-mono text-sm text-muted-foreground uppercase">
                                Data/logs/3201927
              </span>
                        </div>

                        {/* Middle: Evaluation */}
                        <div className="rounded-lg border bg-card p-4 shadow-sm">
                            <div className="flex flex-row items-center">
                                <h1>Evaluation</h1>
                                <Badge className="ml-auto bg-green-300 text-green-600 hover:bg-green-300/80">
                                    False Positive
                </Badge>
                            </div>
                            <div className="my-4">
                                <span className="text-xs text-muted-foreground">
                                    Recent performance evaluation shows significant improvement in
                                    code quality and project delivery times. Consistently meets
                                    deadlines and demonstrates strong problem-solving skills.
                                    Recommended for consideration in upcoming team lead positions.
                </span>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1>Key Skills</h1>
                            </div>
                            <div className="my-4 flex flex-row items-center space-x-3">
                                <Badge variant="secondary">React</Badge>
                                <Badge variant="secondary">Node.js</Badge>
                                <Badge variant="secondary">TypeScript</Badge>
                            </div>
                            <div>
                                <div className="flex flex-row items-center">
                                    <h1>True Positive Score</h1>
                                    <Progress
                                        value={60}
                                        className="ml-auto max-w-32 rounded-sm"
                                    />
                                </div>

                                <div className="my-4 space-y-2">
                                    <Skeleton className="h-1 w-full" />
                                    <Skeleton className="h-1 w-full" />
                                    <Skeleton className="h-1 w-full" />
                                </div>
                            </div>
                            <div className="mt-12 mb-4 flex items-center justify-between bg-card">
                                <div className="space-x-4">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-success text-success hover:bg-success/10"
                                    >
                                        False Positive
                  </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-destructive text-destructive hover:bg-destructive/10 hover:text-red-600"
                                    >
                                        True Positive
                  </Button>
                                </div>

                                <div className="flex space-x-2">
                                    <Button size="icon" variant="outline" className="size-8">
                                        <X className="size-4" />
                                    </Button>
                                    <Button size="icon" variant="outline" className="size-8">
                                        <Share className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Right Card */}
                    <div>
                        <div className="mt-24 flex flex-col gap-4 rounded-lg bg-background/50 p-4">
                            <div className="rounded-lg border bg-card p-6 shadow-sm">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {analyticsSection.rightCard.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
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
                                            className="h-[196px] w-full"
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
                                                    content={
                                                        <ChartTooltipContent indicator="dashed" />
                                                    }
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
                                            className="rounded-lg border bg-card p-4 shadow-sm flex flex-col"
                                        >
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-3xl font-bold">{stat.value}</h2>
                                                {stat.trend === "up" ? (
                                                    <ArrowUp className="text-success size-6" />
                                                ) : (
                                                        <ArrowUp className="text-destructive size-6 rotate-180" />
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
            </div>
        </section>
    );
};

export { Pricing2 };
