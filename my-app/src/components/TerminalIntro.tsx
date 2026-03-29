import React, { useEffect, useState, useCallback } from 'react';
import './TerminalIntro.css';

interface TerminalIntroProps {
    onComplete: () => void;
}

const LINES = [
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
    const [displayedLines, setDisplayedLines] = useState<typeof LINES>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [skipClicked, setSkipClicked] = useState(false);

    const finish = useCallback(() => {
        setIsFading(true);
        setTimeout(() => onComplete(), 600);
    }, [onComplete]);

    const skip = useCallback(() => {
        if (skipClicked) return;
        setSkipClicked(true);
        finish();
    }, [skipClicked, finish]);

    // Check if already visited this session
    useEffect(() => {
        const visited = sessionStorage.getItem('terminal-shown');
        if (visited) {
            onComplete();
        }
    }, [onComplete]);

    // Typing effect
    useEffect(() => {
        if (skipClicked || !isTyping) return;
        if (currentLine >= LINES.length) {
            sessionStorage.setItem('terminal-shown', 'true');
            setTimeout(() => finish(), 400);
            return;
        }

        const line = LINES[currentLine];
        const isCommand = line.type === 'command';
        const speed = isCommand ? 35 : 8;
        const lineDelay = line.type === 'blank' ? 100 : isCommand ? 200 : 60;

        if (currentChar === 0 && displayedLines.length <= currentLine) {
            // Add new empty line
            setTimeout(() => {
                setDisplayedLines(prev => [...prev, { ...line, text: '' }]);
            }, lineDelay);
            setTimeout(() => setCurrentChar(1), lineDelay + 50);
            return;
        }

        if (currentChar > 0 && currentChar <= line.text.length) {
            const timer = setTimeout(() => {
                setDisplayedLines(prev => {
                    const updated = [...prev];
                    if (updated[currentLine]) {
                        updated[currentLine] = { ...line, text: line.text.slice(0, currentChar) };
                    }
                    return updated;
                });
                setCurrentChar(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timer);
        }

        if (currentChar > line.text.length) {
            const nextDelay = line.type === 'command' ? 300 : 80;
            const timer = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
                setCurrentChar(0);
            }, nextDelay);
            return () => clearTimeout(timer);
        }
    }, [currentLine, currentChar, isTyping, skipClicked, displayedLines.length, finish]);

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
                            {i === displayedLines.length - 1 && currentLine < LINES.length && (
                                <span className="terminal-cursor">▋</span>
                            )}
                        </div>
                    ))}
                    {displayedLines.length === 0 && (
                        <div className="terminal-line command">
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
