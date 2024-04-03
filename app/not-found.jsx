import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <section className="bg-blue-50 min-h-screen flex-grow">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <div className="flex justify-center">
                        <FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl text-orange-400"></FaExclamationTriangle>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-4 mb-2">
                            Page Not Found
                        </h1>
                        <p className="text-gray-500 text-xl mb-10">
                            You have stumbled upon Miso.
                        </p>
                        <Link
                            href="/"
                            className="bg-miso-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded"
                        >
                            Go Home
                        </Link>
                        <Image
                            src="/images/items/miso-not-found.jpg"
                            height={0}
                            width={0}
                            alt="Miso"
                            sizes="40vw"
                            className="w-auto h-full rounded-t-xl mt-10 m-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-grow"></div>
        </section>
    );
};

export default NotFoundPage;
