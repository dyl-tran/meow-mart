import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Miso Mart | Find Perfect Cat Necessities",
    description: "Shop for all your cats needs",
    keywords: "cat, cat supplies, cat needs, cat food, cat toys, shop cat",
};

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-miso-cream">
                <div className="flex flex-col h-screen justify-between">
                    <Navbar />
                    <main className="mb-auto">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default MainLayout;
