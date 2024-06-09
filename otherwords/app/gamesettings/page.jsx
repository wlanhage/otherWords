"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Background from "../components/emoji-bg";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TeamPopup from '../components/NewTeamPopup';
import { CgAdd } from "react-icons/cg";

export default function Gamesettings() {
    const [teams, setTeams] = useState([{ name: '' }]);
    const [showPopup, setShowPopup] = useState(false);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLanguage = sessionStorage.getItem('language') || 'english';
            setLanguage(savedLanguage);
        }
    }, []);

    const addTeam = (newTeam) => {
        setTeams([...teams, newTeam]);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            teams.forEach((team, index) => {
                sessionStorage.setItem(`team${index}Name`, team.name);
            });
        }
    }, [teams]);

    const handleLanguageChange = (value) => {
        setLanguage(value);
        if (typeof window !== "undefined") {
            sessionStorage.setItem('language', value);
        }
    };

    return (
        <Background>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                <h1 className="text-3xl">Set game settings</h1>
                
                <Card className="w-3/4">
                    <CardHeader> 
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>Language of the words</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup value={language} onValueChange={handleLanguageChange}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="english" id="english" />
                                <Label htmlFor="english">English</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="swedish" id="swedish" />
                                <Label htmlFor="swedish">Swedish</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="german" id="german" />
                                <Label htmlFor="german">German</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="norwegian" id="norwegian" />
                                <Label htmlFor="norwegian">Norwegian</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="portuguese" id="portuguese" />
                                <Label htmlFor="portuguese">Portuguese</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                    <CardFooter>
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
                <div className="w-3/4">
                    {teams.map((item, i) => (
                        <div key={i} className="flex justify-around items-center w-5/6 m-auto bg-white rounded-sm border-gray-400 my-2 hover:bg-slate-200">
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="w-3/4">
                    <div className="flex justify-center items-center w-5/6 m-auto h-12 bg-white rounded-xl border-gray-400 hover:bg-slate-300" onClick={() => setShowPopup(true)}>
                        <CgAdd size={25} color="gray" />
                    </div>
                    {showPopup && 
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <TeamPopup addTeam={addTeam} setShowPopup={setShowPopup} />
                        </div>}
                </div>
                
                <Link className='w-screen flex justify-center' href="/startpage">
                    <Button className="w-4/5">Start</Button>
                </Link>
            </div>
        </Background>
    );
}
