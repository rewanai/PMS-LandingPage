import {
    Bot,
    ChartColumn,
    ListChecks,
    FileText,
    Zap,
    Scaling,
} from "lucide-react";
import { shiba } from "@/lib/fonts";

const Feature130 = () => {
    return (
        <section id="whyUs" className="py-32">
            {/* ✅ Container with max-width and centering */}
            <div className="mx-auto w-full max-w-[1280px] px-4">
                <p className="mb-4 text-xs text-muted-foreground">Why Us?</p>

                <h2
                    className={`${shiba.className} text-3xl font-medium lg:text-5xl`}
                >
                    Why Rewan ACCT Will Power Your Finance
                     </h2>

                {/* ✅ Feature Grid */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {/* Feature Card */}
                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary md:size-12">
                            <FileText className="size-5 md:size-6 stroke-white" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                Invoices & Expenses
                                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Auto-generate, categorize, and track payments effortlessly
                            </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary md:size-12">
                            <Zap className="size-5 md:size-6 stroke-white" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                Payroll
                                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Run payroll in seconds with full compliance
                            </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary md:size-12">
                            <ChartColumn className="size-5 md:size-6 stroke-white" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                Reporting
                                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Real-time dashboards and plain-language explanations
                            </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary md:size-12">
                            <Bot className="size-5 md:size-6 stroke-white" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                AI Assistance
                                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Ask Ghazy anything and get instant insights
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature130 };
