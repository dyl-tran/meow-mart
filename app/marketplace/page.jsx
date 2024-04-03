import React from "react";
import ItemCard from "@/components/ItemCard";
import items from "@/items.json";

const MarketplacePage = () => {
    return (
        <div>
            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto px-4 py-6">
                    {items.length === 0 ? (
                        <p>No properties found</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {items.map((item) => (
                                <ItemCard key={item._id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MarketplacePage;
