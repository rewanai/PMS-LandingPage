"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const sections = [
    {
        subTitle: "Smart Dashboard",
        title: "See Everything in One Place",
        description:
            "Get a clear view of attendance, leave requests, and upcoming contract expirations with quick actions to stay ahead.",
        image: "/Custodmer.png",
    },
    {
        subTitle: "Find & Manage Employee Profiles",
        title: "Collaborate Seamlessly with Teams",
        description:
            "Search, filter, and view employee details easily. Keep data updated and organized across departments.",
        image: "/Employees.png",
    },
    {
        subTitle: "Leave & Attendance",
        title: "Simplify Leave Requests",
        description:
            "Submit and approve leave requests in seconds, track attendance, and see live leave balances on a calendar view.",
        image: "/Atten.png",
    },
    {
        subTitle: "Contract Management",
        title: "Stay on Top of Contracts",
        description:
            "Upload and manage contracts securely, get expiry reminders, and keep compliance under control with ease.",
        image: "/Cont.png",
    },
];

const Timeline2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            let closestSection = 0;
            let closestDistance = Infinity;

            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = index;
                    }
                }
            });

            setActiveIndex(closestSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="how" className="py-32">
            <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
                <h1 className="mb-14 max-w-3xl text-center text-4xl font-semibold text-balance md:text-5xl">
                    Transform your workflow with our solution
                </h1>
                <div className="flex w-full max-w-6xl justify-center gap-20">
                    <div className="flex flex-col gap-16 md:w-[49%]">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    sectionRefs.current[index] = el;
                                }}
                                className="flex flex-col gap-4 md:h-[50vh]"
                            >
                                <div className="block rounded-2xl border bg-muted p-4 md:hidden">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="h-full max-h-full w-full max-w-full rounded-2xl object-cover"
                                    />
                                </div>
                                <p className="text-sm font-semibold text-muted-foreground md:text-base">
                                    {section.subTitle}
                                </p>
                                <h1 className="text-2xl font-semibold md:text-4xl">
                                    {section.title}
                                </h1>
                                <p className="text-muted-foreground">{section.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="sticky top-56 hidden h-fit w-[51%] items-center justify-center md:flex">
                        <img
                            src={sections[sections.length - 1].image}
                            alt={sections[sections.length - 1].title}
                            className="invisible h-[106%] max-h-[300px] w-full max-w-full object-cover"

                        />

                        {sections.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "absolute inset-0 flex h-[106%] items-center justify-center rounded-2xl border bg-muted p-4 transition-opacity duration-200",
                                    index === activeIndex ? "opacity-100" : "opacity-0",
                                )}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[106%] max-h-full w-full max-w-full rounded-2xl border object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Timeline2 };
