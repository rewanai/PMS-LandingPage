"use client";
import { shiba } from "@/lib/fonts"; // ✅ adjust path as needed

import { CircleCheck, Users, Rocket, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
    {
        id: "employees",
        title: "For Employees",
        icon: <Users className="size-6 text-primary" />,
        features: [
            {
                title: "Manage Your Profile",
                desc: "Update personal information, view your contract, and access your data",
            },
            {
                title: "Request Leave & Track Balances",
                desc: "Submit requests with a few clicks and see your leave history and balances instantly",
            },
            {
                title: "Submit General Requests",
                desc: "Easily ask for IT support or equipment without leaving the platform.",
            },
        ],
    },
    {
        id: "managers",
        title: "For Managers",
        icon: <Rocket className="size-6 text-primary" />,
        features: [
            {
                title: "Efficiently Handle Approvals",
                desc: "Approve leave requests and general inquiries with a centralized dashboard",
            },
            {
                title: "Monitor Team Performance",
                desc: "Get real-time attendance data and department-specific analytics",
            },
            {
                title: "Communicate Instantly",
                desc: "Receive notifications and stay connected with your team's needs",
            },
        ],
    },
    {
        id: "admins",
        title: "For Administrators",
        icon: <Cpu className="size-6 text-primary" />,
        features: [
            {
                title: "Centralized HR Management",
                desc: "Oversee all employees, departments, and contracts from one powerful system",
            },
            {
                title: "Comprehensive Analytics",
                desc: "Access organization-wide reports, track trends, and gain deep insights",
            },
            {
                title: "Streamlined Onboarding",
                desc: "Use bulk import tools to get new teams up and running in minutes",
            },
        ],
    },
];

const Pricing2 = () => {
    return (
        <section id="features" className="py-32 bg-background">
            <div className="mx-auto w-full max-w-6xl px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className={`${shiba.className} text-4xl font-normal text-pretty lg:text-6xl`}>
                        Unlock Productivity{" "}
                        <span className="text-primary">for Every Role</span>
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground lg:text-lg">
                        Our platform is built with role-based access, ensuring everyone—
                        from employees to executives—has the right tools at their
                        fingertips.
          </p>
                </div>

                {/* Role Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className="flex flex-col justify-between rounded-2xl border bg-card p-8 shadow-sm"
                        >
                            {/* Icon + Title */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex size-14 items-center justify-center rounded-lg bg-accent">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-6">{role.title}</h3>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {role.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CircleCheck className="size-5 text-green-500 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold">{feature.title}</p>
                                            <p className="text-muted-foreground text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button className="w-full">
                                Start for Free →
              </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Pricing2 };
