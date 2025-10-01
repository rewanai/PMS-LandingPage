import React from "react";
import { shiba } from "@/lib/fonts";
type DataItem = {
    id: number;
    title: string;
    description: string;
};

const DATA: DataItem[] = [
    {
        id: 1,
        title: "Step 1: Quick Setup",
        description:
            "Configure employees, tax rules, and budgets in minutes with guided onboarding.",
    },
    {
        id: 2,
        title: "Step 2: Automate Finance",
        description:
            "Invoices, payroll, and VAT run automatically with built-in Omani compliance.",
    },
    {
        id: 3,
        title: "Step 3: Ask Ghazy",
        description:
            "Chat with Ghazy for instant answers, reports, and insights — anytime you need them.",
    },
];


type StepItemProps = {
    step: DataItem;
    isLast: boolean;
};

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
    return (
        <div className="max-lg:flex max-lg:gap-4">
            <div className="relative lg:py-6">
                <div
                    className={`bg-accent/50 bg-linear-to-b lg:bg-linear-to-r absolute h-full w-1 -translate-x-1/2 translate-y-11 max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:-translate-y-1/2 lg:translate-x-6 ${
                        isLast ? "from-accent to-white" : ""
                        }`}
                />
                <div className="bg-primary relative z-0 grid size-11 place-content-center rounded-full border-4 border-accent">

                    <p className="text-lg font-bold text-white">{step.id}</p>
                </div>
            </div>
            <div className="max-lg:mt-2">
                <p className="text-lg font-semibold text-black">{step.title}</p>
                <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
        </div>
    );
};

const Timeline4 = () => {
    return (
        <section id="how" className="py-32">
            <div className="container mx-auto max-w-[1280px]">
                <div>
                    <h2 className={`${shiba.className} text-4xl font-medium sm:text-5xl lg:text-5xl`}>
                        Run Finance Smarter in 3 Steps</h2>
                    <p className="text-muted-foreground mt-8 md:text-lg">
                        See how quickly you can get compliant, automate your workflows, and get answers from Ghazy with just a chat.
          </p>
                </div>
                <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
                    {DATA.map((step, index) => (
                        <StepItem
                            key={step.id}
                            step={step}
                            isLast={index === DATA.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Timeline4 };
