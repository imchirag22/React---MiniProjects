import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
 
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full max-w-xl mx-auto space-y-2">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id}
          isOpen={openIndex === idx}
          onClick={() =>
            setOpenIndex(openIndex === idx ? null : idx)
          }
          header={item.title}
        >
          <p>{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
export default Accordion
