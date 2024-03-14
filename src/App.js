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

function Accordion() {
  // Add State
  const [currentOpen, setCurrentOpen] = useState(null);
}
