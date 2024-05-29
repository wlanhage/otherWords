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
    <>
      <Background className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="m-auto font-bold text-3xl">In Other Words!</h1>
        <Link href="/game">
          <StartButton buttonText={'Start the game'}></StartButton>
        </Link>
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the game work?</AccordionTrigger>
          <AccordionContent>
            A word will be presented, you must then describe the word good enough so your teamate says it out - without you mentioning the word itself!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What if I dont know the word?</AccordionTrigger>
          <AccordionContent>
            If you dont know the word, or want to skip - you can press the skip button. However that will take 5 seconds of your time
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I win</AccordionTrigger>
          <AccordionContent>
            You recieve 1 points for each time you press the green button, when the word is correct. You can yourself decide what amount of points you go for.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </Background>

    </>
  );
}
