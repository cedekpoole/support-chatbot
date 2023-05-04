import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { FC } from 'react'

const Chat: FC = () => {
  return <Accordion type="single" collapsible className="relative bg-white z-40 shadow">
    <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8">Hello</div>
    </AccordionItem>
  </Accordion>
}

export default Chat