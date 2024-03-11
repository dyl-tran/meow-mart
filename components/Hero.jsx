import React from "react";
import DynamicWord from "@/components/DynamicWord";

const Hero = () => {
    return (
        // <!-- Hero -->
        <section className="bg-miso-orange py-20 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-miso-cream sm:text-5xl md:text-6xl">
                        Find the Perfect <DynamicWord /> for Your Cat
                    </h1>
                    <p className="my-4 text-xl text-miso-cream">
                        Shop for all your cat's needs near you.
                    </p>
                </div>
                <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
                        <label htmlFor="location" className="sr-only">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Enter Location (City, State, Zip, etc"
                            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-purple-500"
                        />
                    </div>
                    <div className="w-full md:w-2/5 md:pl-2">
                        <label htmlFor="property-type" className="sr-only">
                            Property Type
                        </label>
                        <select
                            id="property-type"
                            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-purple-500"
                        >
                            <option value="All">All</option>
                            <option value="Apartment">Toys</option>
                            <option value="Studio">Treats</option>
                            <option value="Condo">Beds</option>
                            <option value="House">Houses</option>
                            <option value="Toys">Food</option>
                            <option value="Loft">Scratch Posts</option>
                            <option value="Room">Litter</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-miso-gray text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
