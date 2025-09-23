import React from "react";
import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";

const Feature252 = () => {
    return (
        <section className=" py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="relative h-[460px] w-full overflow-hidden rounded-4xl border bg-background p-4">
                    <svg
                        className="absolute top-0 left-0 size-full p-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            opacity="0.2"
                            width="100%"
                            height="100%"
                            rx="22"
                            strokeWidth="2"
                            stroke="currentColor"
                            strokeDasharray="7 12"
                        />
                    </svg>

                    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-3xl text-center">
                        <div className="flex flex-col items-center gap-4">
                            <p className="mx-auto max-w-sm text-muted-foreground lg:text-xl">

                                The HR Built to Automate Your Workflow

              </p>
                            <h1 className="text-5xl font-medium tracking-tighter lg:text-7xl">
                                Your AI Cyber Employee
              </h1>

                        </div>

                        <Ripple mainCircleSize={550} className="absolute -bottom-40" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature252 };
