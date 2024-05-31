"use client"

import Background from "../components/emoji-bg";
import React, { useState, useEffect } from 'react';
import gameWords from "@/public/game_words.json";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Game() {
    const words = gameWords.words;
    const [randomWord, setRandomWord] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

    const generateRandomWordFirst = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex]);
    };

    
    const generateRandomWordCorrect = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex]);
        setCorrectAnswerCounter(correctAnswerCounter + 1);
    };



    const generateRandomWordSkip = () => {
        setIsLoading(true);
        setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex]);
        setIsLoading(false);
        }, 5000);
    };

    
    useEffect(() => {
    generateRandomWordFirst();
    }, []);
    return (
        <>
        <Background>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                <h1 className="text-3xl mt-8 mb-16">
                    Gamepage
                </h1>
                <div className="flex flex-col items-center">
                    <h1 className="">
                    Your word is:
                    </h1>
                    <div className="h-auto w-auto bg-white p-8 rounded-full ">
                    {isLoading ? '5 sec penalty' : randomWord}
                    </div>
                </div>
                <div className="flex flex-row gap-11">
                <AiOutlineCloseCircle size={100} color={'red'} onClick={generateRandomWordSkip} />
                
                <AiOutlineCheckCircle size={100} color={'green'} onClick={generateRandomWordCorrect} />
                        
                </div>
                <h3 className="text-3xl">{correctAnswerCounter}</h3>
            </div>
        </Background>
        </>
    );
}