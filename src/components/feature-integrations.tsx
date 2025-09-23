"use client";

import { Code, MessageCircle, Text } from "lucide-react";

const Feature130 = () => {
    return (
        <section id="how" className="bg-accentt mx-auto w-full max-w-7xl px-6 py-32">
            <h2 className="text-2xl font-semibold md:text-4xl">
                Seamless HR for Smarter Business Growth
      </h2>

            {/* Top Row: Two Feature Cards */}
            <div className="mt-12 mb-6 flex flex-col gap-6 xl:flex-row">
                {/* Card 1 */}
                <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card px-12 pt-12 text-card-foreground shadow-sm">
                    <div className="mb-12 flex flex-col gap-3">
                        <Code className="size-6" />
                        <h4 className="text-xl font-semibold">Fast & Intuitive Setup</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Rewan HR&apos;s intuitive design allows you to quickly get started. With a user-friendly interface for managing customers, contacts, and products, your team can begin building relationships and accelerating sales from day one. Our streamlined process ensures you spend less time on setup and more time on what matters most—your customers.
            </p>
                    </div>
                    <img
                        src="/customer.png"
                        alt="placeholder"
                        className="max-h-52 w-full rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>

                {/* Card 2 */}
                <div className="w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                    <div className="pr-12 pl-12 xl:pl-0">
                        <img
                            src="/Contact.png"
                            alt="placeholder"
                            className="max-h-48 w-full rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-12">
                        <Text className="size-6" />
                        <h4 className="text-xl font-semibold">Tailored to Your Business Needs</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Rewan HR is built to adapt to your unique workflow. Beyond basic customer and contact management, the platform lets you track custom
                            entitlements, contracts, and even physical assets. This ensures every part of your customer journey, from service agreements to product installations, is meticulously tracked and managed.
            </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Full-Width Card */}
            <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm md:flex-row">
                {/* Text Section */}
                <div className="flex w-full flex-col p-12 md:gap-3">
                    <MessageCircle className="size-6" />
                    <h4 className="text-xl font-semibold">Stay Ahead with Smart Automation</h4>
                    <p className="text-base font-normal text-muted-foreground">
                        Our HR is designed to work for you, not the other way around. The dashboard provides a real-time overview of your business, highlighting critical information at a glance. With automated notifications for
                        contracts approaching their renewal date, you&apos;ll never miss a crucial follow-up. It’s proactive, smart, and puts you in control.
          </p>
                </div>

                {/* Image Section */}
                <div className="w-full pl-12 md:pt-12">
                    <img
                        src="Dashboard.png"
                        alt="placeholder"
                        className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>
            </div>
        </section>
    );
};

export { Feature130 };
