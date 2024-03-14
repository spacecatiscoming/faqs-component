import { useState } from "react";
import "./App.css";

// Lets Create Our Question FAQs Array with Objects inside! You can add as many questions here as you want
const faqs = [
  {
    question: "What is React",
    answer:
      "React is a JavaScript library for building user interfaces.  React makes it painless to create interactive UIs. React is an efficient, declarative, and flexible JavaScript library for building user interfaces.",
  },

  {
    question: "What is the React Virtual DOM?",
    answer:
      "After the virtual DOM is updated, React compares it to a snapshot of the virtual DOM taken just before the update, determines what element was changed, and then updates only that element on the real DOM.",
  },

  {
    question: "React Hooks you should know",
    answer:
      "useState, useEffect, useReducer, useRef, useContext, useMemo, useCallback",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>FAQs</h1>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  // Add State
  const [currentOpen, setCurrentOpen] = useState(false);

  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem
          key={idx}
          num={idx}
          curOpen={currentOpen}
          onOpen={setCurrentOpen}
          question={el.question}
          answer={el.answer}
        />
      ))}
    </div>
  );
}

function AccordionItem({ el, num, question, answer, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
    console.log(num === curOpen);
  }

  return (
    <div className="item" onClick={handleToggle}>
      <p className="number">{num + 1}</p>
      <h1 className="title">{question}</h1>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen ? <div className="content-box">{answer}</div> : ""}
    </div>
  );
}
