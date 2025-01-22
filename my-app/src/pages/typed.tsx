import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const [text, setText] = useState(''); // State for the current text
  const fullText = 'It was great meeting you!'; // Full text to display
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        // Add one valid character at a time
        setText((prevText) => prevText + (fullText[currentIndex] || ''));
        currentIndex++;
        setTimeout(type, typingSpeed); // Call the function recursively
      }
    };

    type(); // Start typing on mount

    // Cleanup timeout in case the component unmounts
    return () => {
      currentIndex = fullText.length; // Ensure typing stops if unmounted
    };
  }, [fullText, typingSpeed]);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px', margin: '20px', color: 'white' }}>
      {text}
    </div>
  );
};

export default TypewriterEffect;
