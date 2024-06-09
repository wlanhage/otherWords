import Link from "next/link";
import Background from "../components/emoji-bg";



export default function StartPage () {




    return (
        <>
        <Background>
            <div className="h-screen w-screen flex justify-center items-center">
                <Link href="/game">
                <div className="w-1/2 h1/3 bg-green-600 text-3xl">
                    <h1>START ROUND</h1>
                </div>
                </Link>
            </div>

        </Background>
        </>
    )
}