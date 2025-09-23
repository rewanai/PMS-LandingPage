import { Check } from "lucide-react";

const Feature7 = () => {
    return (
        <section className="py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    {/* Image */}
                    <img
                        src="/feat.png"
                        alt="Website components showcase"
                        className="order-2 max-h-96 w-full rounded-md object-cover lg:order-1"
                    />

                    {/* Text Content */}
                    <div className="order-1 flex flex-col lg:order-2 lg:items-start lg:text-left">
                        <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl">
                            HR Blocks Built for Your Entire Team
            </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
                            Hundreds of powerful features designed for employees, managers, and admins. Our AI-powered platform gives every role the right tools — so HR runs smoothly across your organization.
            </p>

                        {/* Feature List */}
                        <ul className="ml-4 space-y-4 text-left">
                            <li className="flex items-center gap-3">
                                <Check className="size-5" />
                                <p className="text-muted-foreground">
                                    Role-Based Dashboards – Employees, managers, and admins
                </p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="size-5" />
                                <p className="text-muted-foreground">
                                    Fully Automated Workflows – Leave approvals & attendance tracking
                </p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="size-5" />
                                <p className="text-muted-foreground">
                                    Customizable & Scalable – Adapts to your processes & growing team
                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature7 };
