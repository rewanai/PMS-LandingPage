import React from "react";

// Ensure shiba is imported and initialized somewhere above
// Example:
// import { Shiba } from "@/lib/fonts"
// const shiba = Shiba({ subsets: ['latin'] });
import { shiba } from "@/lib/fonts";
const Feature274 = () => {
  return (
    <section id="features" className="py-32  bg-accent/45">
      <div className="container mx-auto max-w-[1280px] flex flex-col items-center">
        <div className="text-center">
          <h3 className={`${shiba.className} text-4xl font-semibold text-pretty md:mb-4 lg:mb-6 lg:max-w-3xl lg:text-5xl`}>
            Powerful Features, Real Business Impact
          </h3>
        </div>
      </div>

      <div className="container mx-auto max-w-[1280px] mt-16">
        <div className="relative border-accent">
          <div className="grid border md:grid-cols-2 md:divide-x border-accent">
            <a
              href="#"
              className="group relative flex flex-col items-center border-accent pt-8 pb-8 text-center transition-all duration-200 md:border-t md:px-8 md:pt-12 md:pb-12 lg:px-12 lg:pt-16 lg:pb-20 border-accent"
            >
              <div className="absolute top-0 h-px w-full bg-border md:hidden border-accent" />
              <div className="mb-8 flex aspect-1/1 w-16 items-center justify-center md:w-[6.25rem] lg:mb-[3.25rem] border-accent">
                <img
                  src="F1.png"
                  alt="Real-time Analytics"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:mb-5">
                AI-Powered Financial Co-Pilot
              </h2>
              <p className="mb-auto text-muted-foreground">
                Meet Ghazy, your intelligent accounting assistant.
                Ask natural-language questions, get instant answers, and receive proactive alerts for upcoming deadlines, unusual spending, and compliance checks — all in plain language your whole team can understand.
              </p>
            </a>

            <a
              href="#"
              className="group relative flex flex-col items-center border-accent pt-8 pb-8 text-center transition-all duration-200 md:border-t md:px-8 md:pt-12 md:pb-12 lg:px-12 lg:pt-16 lg:pb-20"
            >
              <div className="absolute top-0 h-px w-full bg-border md:hidden" />
              <div className="mb-8 flex aspect-1/1 w-16 items-center justify-center md:w-[6.25rem] lg:mb-[3.25rem]">
                <img
                  src="F2.png"
                  alt="AI-Powered Automation"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:mb-5">
                Automated, Compliant Accounting
              </h2>
              <p className="mb-auto text-muted-foreground">
                From invoicing and payroll to VAT filing, Rewan ACCT automates your most time-consuming finance tasks.
Every calculation is aligned with Omani tax and labor laws — so you stay accurate, compliant, and audit-ready without extra effort. </p>
            </a>
          </div>

          {/* Corner Dots */}
          <div className="absolute -top-[5px] -left-[5px]">
            <div className="size-[12px] rounded-full bg-primary" />
          </div>
          <div className="absolute -top-[5px] -right-[5px]">
            <div className="size-[12px] rounded-full bg-primary" />
          </div>
          <div className="absolute -bottom-[5px] -left-[5px]">
            <div className="size-[12px] rounded-full bg-primary" />
          </div>
          <div className="absolute -right-[5px] -bottom-[5px]">
            <div className="size-[12px] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature274 };
