"use client";

import { cn } from "@/lib/utils";
import { shiba } from "@/lib/fonts";
import { Calendar, ClipboardClock, ChartColumn, FileSliders } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Feature274 = () => {
  const steps: Step[] = [
    {
      title: "Design & Planning",
      description:
        "Define goals, timelines, and resources with AI-powered risk prediction.",
      icon: (
        <Calendar className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
    {
      title: "Procedures Setup",
      description:
        "Assign roles, responsibilities, and workflows to streamline execution.",
      icon: (
        <FileSliders className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
    {
      title: "Execution & Monitoring",
      description: "Track progress in real time with dashboards and smart alerts.",
      icon: (
        <ClipboardClock className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
    {
      title: "Reports & Insights",
      description: "Generate analytics and insights to optimize future projects.",
      icon: (
        <ChartColumn className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
  ];

  return (
    <section id="how" className="bg-background">
      <div className="mx-auto w-full max-w-[80rem] px-6 py-32">
        {/* Header */}
        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="relative z-10 flex flex-col items-center justify-center gap-6 text-center"
        >
          <h1
            className={cn(
              "text-foreground text-5xl font-bold tracking-tighter lg:text-5xl",
              shiba.className
            )}
          >
            From Planning to Results
          </h1>
          <p className="text-muted-foreground mb-4 mt-2 max-w-xl text-lg md:text-xl">
            Rewan PMS guides your team through every stage of project
            management—so nothing falls through the cracks.
          </p>
        </motion.header>

        {/* Steps */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={index + 1}
            >
              <Card className="rounded-3xl bg-muted/45 group relative z-10 h-full w-full overflow-hidden border-none shadow-none">
                <CardContent className="flex h-full flex-col items-center gap-5 p-6">
                  <div className="bg-primary flex size-20 items-center justify-center rounded-3xl">
                    {step.icon}
                  </div>
                  <div className="flex w-full flex-col items-center gap-4 pt-3">
                    <h3 className="text-foreground text-center text-2xl font-semibold tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground/70 text-center font-medium">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature274 };
