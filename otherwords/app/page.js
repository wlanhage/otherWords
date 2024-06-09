import { Button } from "@/components/ui/button";
import Background from "./components/emoji-bg";
import StartButton from "./components/StartButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'



export default function Home() {
  return (
    
      <Background>
        <div className="w-screen h-screen flex flex-col justify-around items-center">
      <img src="/IOWlogo.png" alt="In other words logo" width={400} height={250}/>
        <Link href="/gamesettings">
          <Button className="w-full p-9">
            <h2 className="text-2xl ">Start the game</h2>
          </Button>
        </Link>
        <Accordion type="single" collapsible >
        <AccordionItem value="item-1">
          <AccordionTrigger style={{width: '350px'}}>How does the game work?</AccordionTrigger>
          <AccordionContent style={{maxWidth: '350px'}}>
            A word will be presented, you must then describe the word good enough so your teamate says it out - without you mentioning the word itself!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger style={{width: '350px'}}>What if I dont know the word?</AccordionTrigger>
          <AccordionContent style={{maxWidth: '350px'}}>
            If you dont know the word, or want to skip - you can press the skip button. However that will take 5 seconds of your time
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger style={{width: '350px'}}>How do I win</AccordionTrigger>
          <AccordionContent style={{maxWidth: '350px'}}>
            You recieve 1 points for each time you press the green button, when the word is correct. You can yourself decide what amount of points you go for.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </Background>

    
  );
}
