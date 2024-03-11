import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMap, FaMapMarker } from "react-icons/fa";

const ItemCard = ({ item }) => {
    return (
        <div className="rounded-xl shadow-md relative">
            <Image
                src={`/images/items/${item.images[0]}`}
                height={0}
                width={0}
                alt={item.title}
                sizes="100vw"
                className="w-full h-auto rounded-t-xl"
            />
            <div className="p-4">
                <div className="text-left md:text-center lg:text-left mb-6">
                    <div className="text-gray-600">{item.category}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <h3 className="absolute top-[10px] right-[10px] bg-miso-gray px-4 py-2 rounded-lg text-miso-cream font-bold text-right md:text-center lg:text-right">
                    ${item.price}
                </h3>

                <div className="">
                    <p>{item.description}</p>
                </div>

                <div className="border border-gray-300 mt-5 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="flex gap-2 align-middle mb-4 lg:mb-0">
                        <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                        <FaMapMarker className="text-miso-orange mt-1" />
                        <span className="text-miso-orange">
                            {item.location.city}, {item.location.state}
                        </span>
                    </div>
                    <a
                        href="property.html"
                        className="h-[36px] bg-orange-400 hover:bg-orange-500 text-miso-cream px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
