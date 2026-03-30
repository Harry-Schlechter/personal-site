import React, { useEffect, useState, useCallback, useRef } from 'react';
import './TerminalIntro.css';

interface TerminalIntroProps {
    onComplete: () => void;
}

interface DisplayLine {
    type: string;
    text: string;
}

const LINES: DisplayLine[] = [
    { type: 'command', text: '> ssh harry@nyc.dev' },
    { type: 'output', text: 'Connecting to 142.251.xx.xx...' },
    { type: 'output', text: 'Authenticated. Welcome back.' },
    { type: 'blank', text: '' },
    { type: 'command', text: '> cat about.txt' },
    { type: 'output', text: 'Name:     Harry Schlechter' },
    { type: 'output', text: 'Role:     Senior Software Engineer' },
    { type: 'output', text: 'Company:  Trinity Life Sciences' },
    { type: 'output', text: 'Stack:    React · Node · TypeScript · AWS · AI/ML' },
    { type: 'output', text: 'Location: NYC Metro' },
    { type: 'blank', text: '' },
    { type: 'command', text: '> ls ~/projects/' },
    { type: 'output', text: 'camber/    lined-up/    dyno/    boxrooster/' },
    { type: 'blank', text: '' },
    { type: 'command', text: '> ./launch-portfolio.sh' },
    { type: 'output', text: 'Building portfolio...' },
    { type: 'success', text: '✓ Ready.' },
];

const TerminalIntro: React.FC<TerminalIntroProps> = ({ onComplete }) => {
    const [displayedLines, setDisplayedLines] = useState<DisplayLine[]>([]);
    const [isFading, setIsFading] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const animationRef = useRef<boolean>(false);
    const skipRef = useRef<boolean>(false);

    const finish = useCallback(() => {
        sessionStorage.setItem('terminal-shown', 'true');
        setIsFading(true);
        setTimeout(() => onComplete(), 600);
    }, [onComplete]);

    const skip = useCallback(() => {
        skipRef.current = true;
        finish();
    }, [finish]);

    // Check if already visited
    useEffect(() => {
        if (sessionStorage.getItem('terminal-shown')) {
            onComplete();
        }
    }, [onComplete]);

    // Run the typing animation
    useEffect(() => {
        if (animationRef.current) return;
        animationRef.current = true;

        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const typeLines = async () => {
            for (let i = 0; i < LINES.length; i++) {
                if (skipRef.current) return;

                const line = LINES[i];
                const isCommand = line.type === 'command';

                // Pause before line
                if (line.type === 'blank') {
                    await sleep(150);
                    setDisplayedLines(prev => [...prev, { type: 'blank', text: '' }]);
                    continue;
                }

                // Add empty line first
                await sleep(isCommand ? 300 : 80);
                if (skipRef.current) return;

                // Type character by character
                const charDelay = isCommand ? 30 : 6;
                for (let c = 0; c <= line.text.length; c++) {
                    if (skipRef.current) return;
                    const partial = line.text.slice(0, c);
                    setDisplayedLines(prev => {
                        const updated = [...prev];
                        if (updated.length > i) {
                            updated[i] = { ...line, text: partial };
                        } else {
                            updated.push({ ...line, text: partial });
                        }
                        return updated;
                    });
                    if (c < line.text.length) {
                        await sleep(charDelay);
                    }
                }

                // Pause after command lines
                if (isCommand) {
                    await sleep(200);
                }
            }

            // Done
            await sleep(500);
            if (!skipRef.current) {
                finish();
            }
        };

        typeLines();
    }, [finish]);

    return (
        <div className={`terminal-overlay ${isFading ? 'terminal-fade' : ''}`}>
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                    </div>
                    <span className="terminal-title">harry@nyc.dev</span>
                </div>
                <div className="terminal-body">
                    {displayedLines.map((line, i) => (
                        <div key={i} className={`terminal-line ${line.type}`}>
                            {line.text}
                        </div>
                    ))}
                    {showCursor && (
                        <div className="terminal-line">
                            <span className="terminal-cursor">▋</span>
                        </div>
                    )}
                </div>
            </div>
            <button className="terminal-skip" onClick={skip}>
                Skip →
            </button>
        </div>
    );
};

export default TerminalIntro;
