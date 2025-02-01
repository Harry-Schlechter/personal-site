import React, { useState, useEffect } from 'react';

const TypewriterEffect: React.FC = () => {
  const [text, setText] = useState(''); // State for the current text
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State for typing completion
  const fullText = 'It was great meeting you!\nPlease connect with me and explore my website to learn more about me!'; // Full text to display
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

  const connect = () => {
      window.location.href = "https://www.linkedin.com/in/harryschlechter/";
    }


  // const saveContactToVCard = () => {
  //   // Correctly formatted vCard content
  //   const vCardData = `
  //     BEGIN:VCARD
  //     VERSION:4.0
  //     FN:Harry Schlechter
  //     TEL:516-816-9670
  //     EMAIL:harry.schlechter391@gmail.com
  //     END:VCARD
  //       `
  
  //   // Create a Blob with vCard data
  //   const blob = new Blob([vCardData], { type: 'text/vcard' });
  //   let url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.download = 'Harry_Schlechter.vcf';
  //   link.textContent = "Harry Schlechter";
  //   link.href = url;
  //   link.click();
  // };
  

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
          onClick={connect}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default TypewriterEffect;
