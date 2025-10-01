"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { shiba } from "@/lib/fonts";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Is Rewan PMS customizable for different teams?",
        answer:
            "Yes. Rewan PMS adapts to your workflows, team structure, and industry—whether you’re in tech, construction, or services.",
    },
    {
        question: "Do I need training to use Rewan PMS?",
        answer:
            "Not at all. The platform is designed to be intuitive, and we provide built-in guides plus team training sessions to help you get started quickly.",
    },
    {
        question: "How does Rewan PMS use AI?",
        answer:
            "Our AI engine predicts risks, recommends smarter resource allocation, and automates repetitive tracking tasks so your team can focus on what matters most.",
    },
    {
        question: "Can Rewan PMS replace multiple project tools?",
        answer:
            "Yes. Rewan PMS consolidates planning, task management, communication, and reporting into a single intelligent hub.",
    },
    {
        question: "Will my project data be secure?",
        answer:
            "Absolutely. We use enterprise-grade encryption and strict access controls to ensure your projects and data remain safe.",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const Timeline4 = () => {
    return (
        <section className="py-32">
            <div className="mx-auto w-full max-w-[80rem] px-6">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
                    {/* Left side */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        className="flex flex-col gap-6"
                    >
                        <h2
                            className={cn("text-5xl font-semibold", shiba.className)}
                        >
                            Need Help?
              <br />
                            <span className="text-muted-foreground/70">
                                We&apos;re here to assist.
              </span>
                        </h2>
                        <p className="text-lg text-muted-foreground md:text-xl">
                            Still have questions? Feel free to contact our friendly
              <a className="mx-1 whitespace-nowrap underline">support team</a>
              specialists.
            </p>
                        <Button size="lg" variant="outline" className="w-fit">
                            Contact Us
            </Button>
                    </motion.div>

                    {/* Right side FAQ Accordion */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                    >
                        <Accordion type="multiple">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    custom={index + 2}
                                >
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { Timeline4 };
