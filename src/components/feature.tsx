import { Button } from "@/components/ui/button";
import { shiba } from "@/lib/fonts"; // adjust path if needed

const Cta15 = () => {
    return (
        <section className="py-32">
            <div className="mx-auto flex justify-center px-0 w-full">
                <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-gray-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-gray-200),transparent)] lg:pl-20">
                    <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
                        <p className="mb-6 font-medium">Ready to get started?</p>
                        <h2 className={`${shiba.className} mb-6 text-4xl font-normal md:text-5xl`}>
                            Revolutionize Project Delivery in Minutes
</h2>
                        <p className="text-lg text-muted-foreground">
                            Try Rewan PMS risk-free and experience 50% faster project execution with AI-powered workflows.
                        </p>
                        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <Button>Get Started</Button>

                        </div>
                    </div>
                    <div className="relative w-full pl-4 sm:pl-0">
                        <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
                        <img
                            src="b.png"
                            alt="placeholder"
                            className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Cta15 };
