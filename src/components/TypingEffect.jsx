// TypingEffect.jsx

import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
  const phrases = [
    { text: 'student in Penn State University.', color: '#FFD700' }, // Gold
    { text: 'full stack developer.', color: '#00BFFF' }, // DeepSkyBlue
    { text: 'Web3.0 enthusiast.', color: '#32CD32' }, // LimeGreen
    { text: 'systems designer.', color: '#FF4500' }, // OrangeRed
    { text: 'cloud architecture enthusiast', color: '#008080' } // Teal
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');
  const [color, setColor] = useState(phrases[0].color); // Initialize with the first color
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (index === phrases.length) setIndex(0);
    const fullText = 'I am a ' + phrases[index].text;
    const lastIndex = fullText.length - 1;

    if (subIndex === lastIndex + 1 && !reverse) {
      setTimeout(() => setReverse(true), 500); // Delay before starting to delete
      return;
    }

    if (subIndex === 'I am a '.length && reverse) {
      setTimeout(() => {
        setReverse(false);
        const nextIndex = (index + 1) % phrases.length;
        setIndex(nextIndex);
        setColor(phrases[nextIndex].color); // Update color for next phrase
        setText('I am a '); // Reset text to only include the prefix
      }, 500); // Delay before typing the next phrase
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) => (reverse ? prev.slice(0, -1) : prev + fullText[subIndex]));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases.length]);

  return <p className="text-3xl" style={{ color: color }}>{text}</p>;
};

export default TypingEffect;
