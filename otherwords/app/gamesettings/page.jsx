"use client"

import Background from "../components/emoji-bg"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { CgAdd } from "react-icons/cg";



export default function Gamesettings () {




    return (
        <>
           <Background>
                <div className="w-screen h-screen flex flex-col items-center justify-around">
                    <h1 className="text-3xl">Set game settings</h1>
                    <div className="flex flex-col">
                    <Card>
                        <CardHeader> 
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>Select settings for the game</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup defaultValue="english"> 
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
                            </RadioGroup>
                        </CardContent>
                        <CardFooter>
                            <Button>Save</Button>
                        </CardFooter>
                    </Card>
                    <div className="flex justify-center items-center w-full h-12 bg-slate-200 rounded-xl border-gray-400 hover:bg-slate-300">
                        <CgAdd size={25} color="gray" />
                    </div>
                    
                    
                    </div>


                </div>
           </Background>
        </>
    )
}