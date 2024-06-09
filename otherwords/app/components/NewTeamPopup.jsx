
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";



export default function TeamPopup ({addTeam, setShowPopup}) {

    const [teamName, setTeamName] = useState('');

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Add a team</CardTitle>
                    <Input 
                        placeholder="Teamname" 
                        className="mt-3" 
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                    <div>
                        <Button style={{backgroundColor: 'green'}} className="w-3/5" onClick={() => { addTeam({ name: teamName  }); setShowPopup(false)}} >
                            <AiOutlineCheckCircle size={30} color={'white'} />
                            </Button>
                        <Button style={{backgroundColor: 'red'}} className="w-2/5 mt-3" onClick={() => setShowPopup(false)}>
                            <AiOutlineCloseCircle color="white" size={30} />
                            </Button>
                    </div>
                </CardHeader>
            </Card>

        </div>
    )
}