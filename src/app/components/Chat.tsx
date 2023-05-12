import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { FC } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="text-black bg-white border fixed right-10 w-80 bottom-6 border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col ">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col h-80">
                  <ChatMessages className="px-2 py-3 flex-1"/>
                    <ChatInput className="px-4" />
                </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
