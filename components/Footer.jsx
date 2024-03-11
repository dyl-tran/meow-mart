import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo-cat-2.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-orange-400 py-4 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="mb-4 md:mb-0">
                    <Image src={logo} alt="Logo" className="h-8 w-auto" />
                </div>
                <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
                    <ul className="flex space-x-4">
                        <li>
                            <Link className="text-miso-cream" href="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="text-miso-cream" href="/terms">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-miso-cream mt-2 md:mt-0">
                        &copy; {currentYear} Miso Mart. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
