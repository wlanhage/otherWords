import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function Scoreboard({ teams }) {
    return (
        <Card className="w-4/5">
            <CardHeader>
                <CardTitle><h2>Scoreboard</h2></CardTitle>
            </CardHeader>
            <CardContent>
                {teams.map((team, index) => (
                    <div key={index}>
                        <h3>{team.name}: {team.score}</h3>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}