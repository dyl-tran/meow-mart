import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
    title: "Miso Mart | Find Perfect Cat Necessities",
    description: "Shop for all your cats needs",
    keywords: "cat, cat supplies, cat needs, cat food, cat toys, shop cat",
};

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;
