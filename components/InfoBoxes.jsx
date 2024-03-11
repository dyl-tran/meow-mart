import React from "react";
import InfoBox from "@/components/InfoBox";

const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox
                        heading="For Shoppers
                        "
                        backgroundColor="bg-pink-200"
                        buttonInfo={{
                            text: "Browse Items",
                            link: "/marketplace",
                            backgroundColor: "bg-pink-500",
                        }}
                    >
                        Find high quality items for your cart. Bookmark your
                        favorite items and contact sellers.
                    </InfoBox>
                    <InfoBox
                        heading="For Sellers"
                        backgroundColor="bg-purple-200"
                        buttonInfo={{
                            text: "Add Items",
                            link: "/marketplace/add",
                            backgroundColor: "bg-purple-500",
                        }}
                    >
                        List your cat-related items and reach out to potential
                        shoppers.
                    </InfoBox>
                </div>
            </div>
        </section>
    );
};

export default InfoBoxes;
