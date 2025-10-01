"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { CheckCircle2, Globe, Lock, Star, Zap } from "lucide-react";
import { shiba } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sentence = "Smarter Accounting, Compliance, Decisions with";

const Hero68 = () => {
    return (
        <section className="relative overflow-hidden py-32">
            {/* ✅ Background Grid */}
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                    backgroundImage: `url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid3.svg')`,
                    backgroundRepeat: "repeat",
                    maskImage:
                        "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
                }}
            />

            {/* ✅ Main Content */}
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* ✅ Animated Heading */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    className={cn(
                        "relative mx-auto mb-2 max-w-4xl flex-wrap text-center text-4xl font-semibold md:mb-6 md:text-6xl md:leading-snug",
                        shiba.className
                    )}
                >
                    <span>
                        {sentence.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block text-primary"
                            >
                                {word}
                            </motion.span>
                        ))}

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: sentence.split(" ").length * 0.1 + 0.1 }}
                            className="mx-2 mb-1 inline-block md:mx-4 md:mb-3"
                        >
                            <Globe className="inline-block h-auto w-8 md:w-14 text-primary" />
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sentence.split(" ").length * 0.1 + 0.2 }}
                            className="inline-block text-primary"
                        >
                            AI
            </motion.span>
                    </span>

                    {/* Floating Labels */}
                    <FloatingLabel icon={<Zap className="h-auto w-3" />} delay={0.1} className="-top-10 -left-20">
                        Automated
          </FloatingLabel>
                    <FloatingLabel icon={<Lock className="h-auto w-3" />} delay={0.2} className="top-14 -left-24">
                        Secure
          </FloatingLabel>
                    <FloatingLabel icon={<Star className="h-auto w-3" />} delay={0.3} className="-top-10 -right-24">
                        Accurate
          </FloatingLabel>
                    <FloatingLabel icon={<CheckCircle2 className="h-auto w-3" />} delay={0.4} className="top-14 -right-28">
                        Insightful
          </FloatingLabel>
                </motion.h1>

                {/* ✅ Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    className="mx-auto mb-6 max-w-3xl text-center font-medium text-muted-foreground md:text-xl"
                >
                    Rewan ACCT gives you full financial control with automation,
                    compliance, and real-time insights tailored for Oman.
                 </motion.p>
                {/* ✅ CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-3 pt-3 pb-12"
                >
                    <Button size="lg">Get Started</Button>

                </motion.div>

                {/* ✅ Animated Browser */}
                <ContainerScroll titleComponent="">
                    <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                        <img
                            src="Hero.png"
                            alt="Landing page preview"
                            className="aspect-[16/9] h-auto w-full object-cover"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </ContainerScroll>

            </div>
        </section>
    );
};

export { Hero68 };

const FloatingLabel = ({ icon, children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
            "absolute hidden w-fit -rotate-12 gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground underline-offset-3 lg:flex",
            className
        )}
    >
        {icon}
        {children}
    </motion.div>
);

const BrowserMockup = ({
    className = "",
    DahboardUrlDesktop = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png",
    DahboardUrlMobile = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-1.png",
}) => (
        <div
            className={cn(
                "rounded-4xl relative w-full overflow-hidden border",
                className
            )}
        >
            {/* ✅ Only Image */}
            <div className="relative w-full">
                <img
                    src={DahboardUrlDesktop}
                    alt=""
                    className="hidden aspect-video h-full w-full object-top md:block"
                />
                <img
                    src={DahboardUrlMobile}
                    alt=""
                    className="block h-full w-full object-cover md:hidden"
                />
            </div>
        </div>
    );


const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent?: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scaleDimensions = () => (isMobile ? [0.95, 1] : [1.05, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

    return (
        <div
            className="relative flex h-[20rem] items-center justify-center md:h-[40rem]"
            ref={containerRef}
        >
            <div className="relative w-full max-w-5xl" style={{ perspective: "1000px" }}>
                <Card rotate={rotate} scale={scale}>{children}</Card>
            </div>
        </div>
    );
};

const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: any;
    scale: any;
    children: React.ReactNode;
}) => (
        <motion.div
            style={{ rotateX: rotate, scale }}
            className="-4 mx-auto h-full w-full rounded-[30px] p-2 shadow-2xl md:p-6"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
                {children}
            </div>
        </motion.div>
    );
