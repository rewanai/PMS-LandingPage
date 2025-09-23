import {
    BadgePercent,
    CheckCircle,
    CircleMinus,
    Code2,
    Headset,
    LineChart,
    Users,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Compare3 = () => {
    return (
        <section id="whyUs" className="py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <Badge variant="outline">Why Us</Badge>
                    <h2 className="mx-auto max-w-2xl text-4xl font-semibold sm:text-5xl">
                        See How Rewan HR Outperforms Manual HR and Other Tools
            </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                        Discover why growing teams choose our AI-powered HR solution over spreadsheets, email approvals, and outdated systems
            </p>
                </div>

                {/* Responsive Table */}
                <div className="-mx-6 overflow-x-auto">
                    <div className="mt-14 min-w-[600px] grid grid-cols-3 md:min-w-full md:grid-cols-3">
                        {/* Empty top-left */}
                        <div className="border-b border-border p-5"></div>

                        {/* Rewan HR column */}
                        <div className="flex flex-col items-center gap-2 sticky top-0 z-10 border-b border-border bg-muted p-5 rounded-t-2xl">
                            <img src="/Logoo.png" alt="Rewan HR logo" className="size-8" />
                            <p className="text-lg font-semibold">Rewan HR</p>
                            <p className="mt-1 text-center text-sm text-muted-foreground">
                                Built with customer needs in mind
                </p>
                        </div>

                        {/* Traditional HR Tools column */}
                        <div className="flex flex-col items-center gap-2 sticky top-0 z-10 border-b border-border bg-background p-5">
                            <img src="/mt.png" alt="Traditional HR logo" className="size-8" />
                            <p className="text-lg font-semibold">Traditional HR Tools</p>
                            <p className="mt-1 text-center text-sm text-muted-foreground">
                                A common alternative solution
                </p>
                        </div>

                        {/* Why Us Rows */}
                        {[
                            {
                                icon: <Users className="size-4 shrink-0" />,
                                label: "Team Overview",
                                rewan: "Comprehensive employee directory & profiles",
                                legacy: "Scattered across files and email threads",
                            },
                            {
                                icon: <Users className="size-4 shrink-0" />,
                                label: "Automation",
                                rewan: "Runs 24/7, reducing HR workload",
                                legacy: "Entirely manual",
                            },
                            {
                                icon: <BadgePercent className="size-4 shrink-0" />,
                                label: "Leave Management",
                                rewan: "One-click requests & approvals",
                                legacy: "Manual forms and slow response times",
                            },
                            {
                                icon: <Code2 className="size-4 shrink-0" />,
                                label: "Attendance Tracking",
                                rewan: "Real-time check-in/out with analytics",
                                legacy: "Manual logs and late updates",
                            },
                            {
                                icon: <LineChart className="size-4 shrink-0" />,
                                label: "Contract Management",
                                rewan: "Secure storage with version history",
                                legacy: "Risk of losing documents or using outdated versions",
                            },
                            {
                                icon: <Headset className="size-4 shrink-0" />,
                                label: "Dashboards & Reporting",
                                rewan: "Instant role-based insights",
                                legacy: "Hours spent compiling reports",
                            },
                        ].map(({ icon, label, rewan, legacy }, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex items-center gap-2 border-b border-border p-5">
                                    {icon}
                                    <span className="font-semibold">{label}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-muted p-5 text-center">
                                    <CheckCircle className="size-5 text-green-600" />
                                    <span className="text-xs text-muted-foreground">{rewan}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 border-b border-border text-center p-5">
                                    <CircleMinus className="size-5 text-red-600" />
                                    <span className="text-xs text-muted-foreground">{legacy}</span>
                                </div>
                            </React.Fragment>
                        ))}

                        {/* Footer Row */}
                        <div className="border-border p-5"></div>
                        <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-muted p-5">
                            <Button className="w-full">Try Rewan HR today</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Compare3 };
