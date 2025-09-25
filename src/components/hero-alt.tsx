import { ArrowRight, DollarSign, Medal, Sparkle, Zap } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { shiba } from "../lib/fonts";
const Hero68 = () => {
    return (
        <section className="py-6">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="border-x border-t border-dashed px-4 py-20 md:px-16">
                    <div className="mx-auto max-w-3xl">
                        {/* Version Badge */}
                        <a

                            className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm"
                        >
                            <Badge>New</Badge>
              Rewan HR is out now!
              <ArrowRight className="inline size-4" />
                        </a>

                        {/* Title */}
                        <h1 className={`${shiba.className} my-4 mb-6 text-center text-3xl font-normal lg:text-8xl`}>
                            Smarter HR for Modern Teams
    </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground lg:text-xl">
                            Automate HR tasks, streamline approvals, and get actionable insights all from one AI-powered platform.
            </p>

                        {/* Buttons */}
                        <div className="flex flex-col justify-center gap-2 sm:flex-row">
                            <a href="#contact">
                                <Button size="lg" className="w-full gap-2 sm:w-auto lg:mt-10">
                                    <div className="size-2 rounded-full bg-accent"></div>
      Book a Demo
    </Button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="relative grid border-x border-dashed md:grid-cols-3">
                    <Sparkle className="absolute top-0 right-0 h-auto w-5 translate-x-2.5 -translate-y-2.5 fill-primary" />
                    <Sparkle className="absolute top-0 left-0 h-auto w-5 -translate-x-2.5 -translate-y-2.5 fill-primary" />

                    <div className="flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-sm lg:size-12 lg:text-base">
                            <Zap className="w-5 lg:w-6" />
                        </span>
                        Instant Automation
          </div>

                    <div className="flex items-center gap-6 border-x border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-sm lg:size-12 lg:text-base">
                            <DollarSign className="w-5 lg:w-6" />
                        </span>
            Upfront, no hidden fees
          </div>

                    <div className="flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-sm lg:size-12 lg:text-base">
                            <Medal className="w-5 lg:w-6" />
                        </span>
                        Data-Driven Decisions
          </div>
                </div>
            </div>
        </section>
    );
};

export { Hero68 };
