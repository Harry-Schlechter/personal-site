import React, { useState, useEffect } from 'react';

const TypewriterEffect: React.FC = () => {
  const [text, setText] = useState(''); // State for the current text
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State for typing completion
  const fullText = 'It was great meeting you!\nPress the button below to save my contact information'; // Full text to display
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const type = () => {
      if (currentIndex < fullText.length) {
        const currentChar = fullText[currentIndex];
        if (currentChar !== undefined) {
          setText((prevText) => prevText + currentChar);
        }
        currentIndex++;
        timeoutId = window.setTimeout(type, typingSpeed);
      } else {
        setIsTypingComplete(true); // Typing is complete
      }
    };

    // Reset state and start typing
    setText(''); // Reset text before starting
    setIsTypingComplete(false); // Reset completion state
    type(); // Start typing

    // Cleanup timeout in case the component unmounts
    return () => {
      clearTimeout(timeoutId); // Clear any pending timeouts
    };
  }, [fullText, typingSpeed]);

  const saveContactToVCard = () => {
    // Correctly formatted vCard content
    const vCardData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:Harry Schlechter
  TEL:516-816-9670
  EMAIL:harry.schlechter391@gmail.com
  ORG:BNY | HealFast
  END:VCARD
    `.trim(); // Trim leading/trailing whitespace to avoid issues
  
    // Create a Blob with vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
  
    // Create an invisible link to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Harry_Schlechter.vcf';
    link.click();
  };
  

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px', margin: '20px', color: 'white' }}>
      <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
      {isTypingComplete && (
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '15px',
            backgroundColor: '#021526',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={saveContactToVCard}
        >
          Save Contact
        </button>
      )}
    </div>
  );
};

export default TypewriterEffect;
