import React from "react";
import items from "@/items.json";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";

const HomeItems = () => {
    const recentItems = items
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

    return (
        <>
            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
                        Recent Items
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentItems === 0 ? (
                            <p>No Items Found</p>
                        ) : (
                            recentItems.map((items) => (
                                <ItemCard key={items._id} item={items} />
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="m-auto max-w-lg my-10 px-6">
                <Link
                    href="/marketplace"
                    className="block bg-miso-orange text-white text-center py-4 px-6 rounded-xl hover:bg-opacity-90"
                >
                    View The Marketplace
                </Link>
            </section>
        </>
    );
};

export default HomeItems;
