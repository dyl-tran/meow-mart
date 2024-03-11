"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";

const words = ["Toy", "Treat", "House", "Bed"];
const changeInterval = 2000;

const DynamicWord = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setFade(true);
                setCurrentWord(
                    words[(words.indexOf(currentWord) + 1) % words.length]
                );
            }, 1000);
        }, changeInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentWord]);

    return (
        <span
            className={`transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
            }`}
        >
            {currentWord}
        </span>
    );
};

export default DynamicWord;
