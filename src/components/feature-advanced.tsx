import { Combine, Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature204 = () => {
    return (
        <section id="features" className="py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="flex flex-col items-center gap-10 md:gap-24 lg:flex-row lg:items-stretch">
                    {/* Left Image */}
                    <div className="grid w-full max-w-lg place-items-center rounded-2xl bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat px-8 py-10 sm:px-16 sm:py-20">
                        <img
                            src="/ASD.png"
                            alt="placeholder"
                            className="rounded-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex max-w-2xl flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h2 className="text-5xl font-medium text-balance lg:text-6xl">
                                Designed for Your Success.
                            </h2>
                            <p className="mt-6 text-lg text-muted-foreground">
                                Streamline your operations with powerful features that simplify management and boost efficiency.
                            </p>
                            <Button size="lg" className="mt-8">
                                Explore Now <Zap className="ml-2" />
                            </Button>
                        </div>

                        {/* Small Feature Highlights */}
                        <div className="grid gap-7 sm:grid-cols-2">
                            <div className="text-center lg:text-left">
                                <Combine className="mx-auto size-8 lg:mx-0" />
                                <h3 className="mt-4 mb-2 text-lg font-semibold">
                                    Comprehensive Customer Management
                                </h3>
                                <p className="text-muted-foreground">
                                    Manage all your customers and contacts in one central, easy-to-access place.
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <Gauge className="mx-auto size-8 lg:mx-0" />
                                <h3 className="mt-4 mb-2 text-lg font-semibold">
                                    Real-Time Renewal Alerts
                                </h3>
                                <p className="text-muted-foreground">
                                    Never miss a deadline with instant notifications for contracts nearing renewal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature204 };
