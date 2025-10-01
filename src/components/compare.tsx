import { Calendar, Target, Trophy, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { shiba } from "@/lib/fonts";
const Compare1 = () => {
    return (
        <section className="py-32 bg-accent/45">
            <div className="container mx-auto max-w-[1280px]">
                <div className="grid place-content-center gap-10 lg:grid-cols-2">
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 lg:items-start">
                        <Badge
                            variant="outline"
                            className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
                        >
                            <Trophy className="h-auto w-4" />
                            Key Aspects
                        </Badge>
                        <h2
                            className={`${shiba.className} text-primary text-center text-3xl font-medium lg:text-left lg:text-5xl`}
                        >
                            Empowering Smarter Finance for Growing Teams
</h2>

                        <p className="text-center text-muted-foreground lg:text-left lg:text-lg">
                            Rewan ACCT is more than an accounting tool — it’s your
                            financial command center. With <strong>Ghazy</strong>,
                            our AI accountant, we simplify payroll, invoicing,
                            and tax compliance so your team can focus on growth.
                        </p>

                        {/* Stats Row */}
                        <div className="mt-9 flex w-full flex-col justify-center gap-6 md:flex-row lg:justify-start">
                            <div className="flex justify-between gap-6">
                                <div className="mx-auto">
                                    <p className="text-primary mb-1.5 text-3xl font-bold">100%</p>
                                    <p className="text-muted-foreground">
                                        VAT & labor law compliant
                                    </p>
                                </div>
                                <Separator orientation="vertical" className="h-auto" />
                                <div className="mx-auto">
                                    <p className="text-primary mb-1.5 text-3xl font-bold">50+</p>
                                    <p className="text-muted-foreground">
                                        Employees onboarded
                                    </p>
                                </div>
                            </div>
                            <Separator
                                orientation="vertical"
                                className="hidden h-auto md:block"
                            />
                            <Separator orientation="horizontal" className="block md:hidden" />
                            <div className="flex justify-between gap-6">
                                <div className="mx-auto">
                                    <p className="text-primary mb-1.5 text-3xl font-bold">24/7</p>
                                    <p className="text-muted-foreground">
                                        Ghazy always available
                                    </p>
                                </div>
                                <Separator orientation="vertical" className="h-auto" />
                                <div className="mx-auto">
                                    <p className="text-primary mb-1.5 text-3xl font-bold">
                                        0 Misses
                                    </p>
                                    <p className="text-muted-foreground">
                                        Payroll & VAT always on time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img
                        src="F3.png"
                        alt="placeholder"
                        className="ml-auto max-h-[450px] w-full rounded-xl object-cover"
                    />
                </div>

                {/* Three Pillars */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <div className="gap flex flex-col gap-3 rounded-lg border p-6">
                            <div className="flex flex-col items-center gap-2 lg:flex-row">
                                <Calendar className="h-auto w-6 stroke-primary" />
                                <h3 className="text-primary text-center text-lg font-medium lg:text-left">
                                    Why Teams Choose Rewan ACCT
                                </h3>
                            </div>
                            <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                                AI-driven simplicity designed for everyone — even
                                non-finance users.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="gap flex flex-col gap-3 rounded-lg border p-6">
                            <div className="flex flex-col items-center gap-2 lg:flex-row">
                                <Target className="h-auto w-6 stroke-primary" />
                                <h3 className="text-primary text-center text-lg font-medium lg:text-left">
                                    Our Purpose
                                </h3>
                            </div>
                            <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                                Automate routine tasks, reduce errors, and
                                empower smarter decision-making.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="gap flex flex-col gap-3 rounded-lg border p-6">
                            <div className="flex flex-col items-center gap-2 lg:flex-row">
                                <Users className="h-auto w-6 stroke-primary" />
                                <h3 className="text-primary text-center text-lg font-medium lg:text-left">
                                    Our Finance Expertise
                                </h3>
                            </div>
                            <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                                Built for Oman — fully aligned with VAT, tax,
                                and labor regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Compare1 };
