"use client"

import Background from "../components/emoji-bg";
import React, { useState, useEffect } from 'react';
import gameWords from "@/public/game_words.json";

export default function Game() {
    const words = gameWords.words;
    const [randomWord, setRandomWord] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

    
    const generateRandomWordCorrect = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex]);
        setCorrectAnswerCounter(correctAnswerCounter + 1);
    };

    
    useEffect(generateRandomWordCorrect, []);

    const generateRandomWordSkip = () => {
        setIsLoading(true);
        setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex]);
        setIsLoading(false);
        }, 5000);
    };

    
    useEffect(generateRandomWordSkip, []);

    return (
        <>
        <Background>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <h1>Gamepage</h1>
                <h1>random word: {isLoading ? '5 sec penalty' : randomWord}</h1>
                <div className="flex flex-row gap-11">
                    <div className="w-auto h-auto bg-red-600 rounded-full p-6 font-acme" onClick={generateRandomWordSkip}>
                        SKIP
                    </div>
                    <div></div>
                    <div className="w-auto h-auto bg-green-600 rounded-full p-6" onClick={generateRandomWordCorrect}>
                        CORRECT
                    </div>
                </div>
                <h3 className="text-xl font-acme">{correctAnswerCounter}</h3>
            </div>
        </Background>
        </>
    );
}