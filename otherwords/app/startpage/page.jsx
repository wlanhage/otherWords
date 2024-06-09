import Link from "next/link";
import Background from "../components/emoji-bg";
import { Button } from "@/components/ui/button";



export default function StartPage () {




    return (
        <>
        <Background>
            <div className="h-screen w-screen flex justify-center items-center">
                <Link href="/game" className="w-screen flex justify-center">
                <Button className="w-4/6 bg-green-600 text-2xl">
                    <h1>START ROUND</h1>
                </Button>
                </Link>
            </div>

        </Background>
        </>
    )
}