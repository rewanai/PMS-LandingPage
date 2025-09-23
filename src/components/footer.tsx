import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // modern X (Twitter) icon

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sections = [
    {
        title: "Product",
        links: [
            { name: "Why Us", href: "#whyUs" },
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#how" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "https://rewan.ai" },
            { name: "Team", href: "#" },

            { name: "Contact", href: "#" },
        ],
    },
];

interface Footer8Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
}

const Footer8 = ({
    logo = {
        url: "/",
        src: "/Logos.png",
        alt: "logo",
        title: " "

    },
}: Footer8Props) => {
    return (
        <section id="contact" className="py-32 bg-primary text-white">
            <div className="mx-auto w-full max-w-7xl px-6">
                <footer>
                    <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
                        {/* Left Column */}
                        <div className="col-span-4 flex w-full flex-col gap-6 lg:col-span-2">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <a href={logo.url}>
                                    <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8" />
                                </a>
                                <h2 className="text-xl font-semibold text-white">{logo.title}</h2>
                            </div>
                            <p className="text-white/80">
                                Your AI Cyber Employee, built to accelerate your business.
          </p>
                            <ul className="flex items-center space-x-6">
                                <li className="hover:scale-110 hover:text-gray-200 transition">
                                    <a href="https://www.instagram.com/rewan_ai/"><FaInstagram className="size-6" /></a>
                                </li>
                                <li className="hover:scale-110 hover:text-gray-200 transition">
                                    <a href="https://x.com/Rewan_Ai"><FaXTwitter className="size-6" /></a>
                                </li>
                                <li className="hover:scale-110 hover:text-gray-200 transition">
                                    <a href="https://www.linkedin.com/company/rewanai/?trk=public_post_feed-actor-name&originalSubdomain=om"><FaLinkedin className="size-6" /></a>
                                </li>
                                <li className="hover:scale-110 hover:text-gray-200 transition">
                                    <a href="https://api.whatsapp.com/send/?phone=96876626636&text&type=phone_number&app_absent=0"><FaWhatsapp className="size-6" /></a>
                                </li>
                            </ul>
                        </div>

                        {/* Sections */}
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="col-span-2 md:col-span-1">
                                <h3 className="mb-5 font-medium text-white">{section.title}</h3>
                                <ul className="space-y-4 text-sm text-white/80">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="hover:text-gray-200 transition">
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Right Column */}
                        <div className="col-span-4 md:col-span-2">
                            <h3 className="mb-5 font-medium text-white">Contact Us</h3>
                            <div className="grid gap-1.5">
                                <div className="flex w-full items-center space-x-2">
                                    <Input type="email" placeholder="Enter your email" className="bg-white text-black" />
                                    <Button type="submit">Subscribe</Button>
                                </div>
                            </div>
                            <p className="mt-1 text-xs font-medium text-white/80">
                                By submitting, you agree to our{" "}
                                <a href="#" className="ml-1 text-white underline hover:text-gray-200">
                                    Privacy Policy
            </a>
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/30 pt-8 text-sm font-medium text-white/80 lg:flex-row lg:items-center">
                        <p>
                            <span className="mr-1 font-bold text-white">Rewan CRM</span>
          © {new Date().getFullYear()} All rights reserved.
        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer8 };
