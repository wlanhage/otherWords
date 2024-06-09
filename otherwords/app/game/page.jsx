"use client"

import Background from "../components/emoji-bg";
import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Scoreboard from "../components/Scoreboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Game() {
    const [language, setLanguage] = useState(() => (typeof window !== "undefined" ? sessionStorage.getItem('language') : 'english') || 'english');
    const [gameWords, setGameWords] = useState([]);
    const [randomWord, setRandomWord] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const [teams, setTeams] = useState([]);
    const [isGamePage, setIsGamePage] = useState(true); 
    const [showScoreboard, setShowScoreboard] = useState(false);

    const nextTurn = () => {
        setCurrentTeamIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % teams.length;
            console.log(`Changing from team ${prevIndex} to team ${newIndex}`);
            setCorrectAnswerCounter(0);
            return newIndex;
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTeams = [];
            let i = 1;
            while (sessionStorage.getItem(`team${i}Name`)) {
                storedTeams.push({
                    name: sessionStorage.getItem(`team${i}Name`),
                    score: 0,
                });
                i++;
            }
            console.log(`Setting teams state to: ${JSON.stringify(storedTeams)}`);
            setTeams(storedTeams);
        }
    }, []);

    const scorePoints = (points) => {
        setTeams((prevTeams) => {
            const newTeams = [...prevTeams];
            newTeams[currentTeamIndex].score += points; 
            return newTeams;                                
        });
    };

    useEffect(() => {
        async function loadGameWords() {
            try {
                let gameWordsModule;
                switch (language) {
                    case 'swedish':
                        gameWordsModule = await import("@/public/game_words_swedish.json");
                        break;
                    case 'german':
                        gameWordsModule = await import("@/public/game_words_german.json");
                        break;
                    case 'norwegian':
                        gameWordsModule = await import("@/public/game_words_norwegian.json");
                        break;
                    /* case 'portuguese':
                        gameWordsModule = await import("@/public/game_words_portuguese.json");
                        break; */
                    default:
                        gameWordsModule = await import("@/public/game_words_english.json");
                        break;
                }
                setGameWords(gameWordsModule.default);
            } catch (error) {
                console.log(error);
            }
        }
        loadGameWords();
    }, [language]);

    useEffect(() => {
        if (gameWords.length > 0) {
            generateRandomWord();
        }
    }, [gameWords]);

    const generateRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * gameWords.length);
        setRandomWord(gameWords[randomIndex]);
    };

    const generateRandomWordCorrect = () => {
        generateRandomWord();
        setCorrectAnswerCounter(correctAnswerCounter + 1);
        scorePoints(1);
    };

    const generateRandomWordSkip = () => {
        setIsLoading(true);
        setTimeout(() => {
            generateRandomWord();
            setIsLoading(false);
        }, 5000);
    };

    useEffect(() => {
        if (isGamePage) {
            const gameTimer = setTimeout(() => {
                setIsGamePage(false); 
            }, 60000);

            return () => clearTimeout(gameTimer);
        }
    }, [isGamePage]); 

    return (
        <Background>
            {isGamePage ? (
                <div className="w-screen h-screen flex flex-col items-center justify-around">
                    <img src="/IOWlogo.png" alt="In other words logo" width={300} height={200}/>
                    {teams.length > 0 ? (
                        <>
                            <h1 className="text-xl">Team: {teams[currentTeamIndex]?.name}</h1>
                            <div className="flex flex-col items-center w-screen">
                                <h1 className="text-xl">Your word is:</h1>
                                <div className="flex justify-center items-center h-auto py-5 bg-white w-11/12 rounded-xl text-3xl">
                                    <b>{isLoading ? '5 sec penalty' : randomWord}</b>
                                </div>
                            </div>
                            <div className="flex flex-row w-11/12 gap-5">
                                <div className="w-1/2 bg-red-700 border-10 border-white rounded-2xl flex justify-center items-center" 
                                onClick={generateRandomWordSkip}>
                                    <AiOutlineCloseCircle size={100} color={'white'} />
                                </div>
                                <div className="w-1/2 bg-green-700 rounded-2xl flex justify-center items-center" 
                                onClick={generateRandomWordCorrect}>
                                <AiOutlineCheckCircle size={100} color={'white'}  />
                                </div>
                            </div>
                            <h2 className="text-3xl">{correctAnswerCounter}</h2>
                            <h3>Total score: {teams[currentTeamIndex]?.score}</h3>
                        </>
                    ) : (
                        <h1>No teams available</h1>
                    )}
                </div>
            ) : (
                <div className="w-screen h-screen flex flex-col items-center justify-around">
                    <div className="flex flex-col gap-5">
                        <img src="/IOWlogo.png" alt="In other words logo" width={300} height={200}/>
                        <Button onClick={() => setShowScoreboard(!showScoreboard)}>
                            Scoreboard
                        </Button>
                    </div>
                    {showScoreboard && <Scoreboard teams={teams} />}
                    <Card className="w-4/5">
                        
                            <CardHeader>
                                <CardTitle>Score:</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <h2>Team: {teams[currentTeamIndex].name}</h2>
                            <h3>Collected points this round: {correctAnswerCounter}</h3>
                            <h3>Total score: {teams[currentTeamIndex]?.score}</h3>
                        </CardContent>
                    </Card>
                    
                    <div className="flex flex-col justify-center items-center w-full ">
                        <h2 className="text-xl">Next team: <b> {teams[(currentTeamIndex+1) % teams.length].name} </b></h2>
                        
                        <Button className="w-4/5 h-12 border-solid border-white rounded-2xl"
                            onClick={() => {
                            setIsGamePage(true);
                            nextTurn();
                        }}>
                            Start Next Round
                        </Button>
                    </div>
                </div>
            )}
        </Background>
    );
}
