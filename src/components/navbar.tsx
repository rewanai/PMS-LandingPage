"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
    src: "/Logo.png",
    alt: "logo",
    url: "https://rewan.ai",
};

const NAV_ITEMS = [
    { name: "Why Us", link: "#whyUs" },
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how" },
];

export function Navbar17() {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const indicatorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const updateIndicator = () => {
            if (!activeItem) return; // no active item → skip
            const activeEl = document.querySelector(
                `[data-nav-item="${activeItem}"]`,
            ) as HTMLElement;

            if (activeEl && indicatorRef.current && menuRef.current) {
                const menuRect = menuRef.current.getBoundingClientRect();
                const itemRect = activeEl.getBoundingClientRect();

                indicatorRef.current.style.width = `${itemRect.width}px`;
                indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
            }
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeItem]);

    return (
        <section className="sticky top-0 z-50 bg-background py-4">
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
                {/* Left Logo */}
                <div className="flex flex-1">
                    <a href={NAV_LOGO.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <img
                            src={NAV_LOGO.src}
                            className="max-h-78 w-15"
                            alt={NAV_LOGO.alt}
                        />
                    </a>
                </div>


                {/* Center Nav (hidden on mobile, flex on desktop) */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList
                            ref={menuRef}
                            className="relative flex items-center gap-6 px-8 py-3"
                        >
                            {NAV_ITEMS.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href={item.link}
                                            data-nav-item={item.name}
                                            onClick={() => setActiveItem(item.name)}
                                            className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                                                activeItem === item.name
                                                    ? "text-foreground"
                                                    : "text-muted-foreground"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}

                            {/* Active Indicator — only render if something is selected */}
                            {activeItem && (
                                <div
                                    ref={indicatorRef}
                                    className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
                                >
                                    <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
                                </div>
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Side (Sign Up + Mobile Menu) */}
                <div className="flex flex-1 justify-end">
                    {/* Desktop CTA */}
                    <div className="hidden lg:flex">
                        <a href="#contact">
                            <Button variant="outline" size="sm">
                                Contact Us
    </Button>
                        </a>
                    </div>


                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
                    </div>
                </div>
            </nav>
        </section>
    );
}

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className="group relative size-full">
            <div className="absolute flex size-full items-center justify-center">
                <Menu
                    className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
                        isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                        }`}
                />
                <X
                    className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
                        isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                        }`}
                />
            </div>
        </div>
    );
};

const MobileNav = ({
    activeItem,
    setActiveItem,
}: {
    activeItem: string | null;
    setActiveItem: (item: string) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block flex h-full items-center lg:hidden">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <AnimatedHamburger isOpen={isOpen} />
                    </Button>
                </PopoverTrigger>

                <PopoverContent
                    align="end"
                    className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
                >
                    <ul className="bg-background text-foreground w-full py-4">
                        {NAV_ITEMS.map((navItem, idx) => (
                            <li key={idx}>
                                <a
                                    href={navItem.link}
                                    onClick={() => setActiveItem(navItem.name)}
                                    className={`flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                                        activeItem === navItem.name
                                            ? "border-foreground text-foreground"
                                            : "text-muted-foreground hover:text-foreground border-transparent"
                                        }`}
                                >
                                    {navItem.name}
                                </a>
                            </li>
                        ))}
                        <li className="flex flex-col px-7 py-2">
                            <Button variant="outline">Contant Us</Button>
                        </li>
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};
