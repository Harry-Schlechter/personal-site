import React, { useState, useRef, useEffect } from 'react';
import './DynoChat.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const SUGGESTED_QUESTIONS = [
    "What's Harry working on?",
    "What's his tech stack?",
    "Tell me something surprising",
    "What's he like as a teammate?",
];

const DYNO_API_URL = process.env.REACT_APP_DYNO_CHAT_URL || '';

const DynoChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasNudged, setHasNudged] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const MAX_MESSAGES = 10;

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Nudge after 30 seconds on page
    useEffect(() => {
        if (hasNudged) return;
        const timer = setTimeout(() => {
            setHasNudged(true);
        }, 30000);
        return () => clearTimeout(timer);
    }, [hasNudged]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isTyping || messageCount >= MAX_MESSAGES) return;

        const userMessage: Message = { role: 'user', content: text.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);
        setMessageCount(prev => prev + 1);

        try {
            if (DYNO_API_URL) {
                const response = await fetch(DYNO_API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [...messages, userMessage].slice(-6),
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
                } else {
                    setMessages(prev => [...prev, { role: 'assistant', content: getOfflineResponse(text) }]);
                }
            } else {
                // Offline mode — smart fallback responses
                await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
                setMessages(prev => [...prev, { role: 'assistant', content: getOfflineResponse(text) }]);
            }
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "Hmm, I'm having trouble connecting. Try again in a sec!" }]);
        }

        setIsTyping(false);
    };

    const getOfflineResponse = (question: string): string => {
        const q = question.toLowerCase();

        if (q.includes('working on') || q.includes('current') || q.includes('building')) {
            return "Harry's a Senior Software Engineer at Trinity Life Sciences, building enterprise AI platforms for pharma clients. On the side, he's working on Camber (AI for civil engineering), LinedUp (a line-skip app for nightlife), and me — Dyno, his AI life assistant. The guy doesn't stop building.";
        }
        if (q.includes('tech stack') || q.includes('technologies') || q.includes('languages')) {
            return "His core stack is React, Node.js, TypeScript, and AWS. At Trinity he works heavily with OpenAI and LangChain for the AI platform. He's also deep into Python, PostgreSQL, and has production experience with Kafka, Redis, Docker, and Terraform. Full-stack through and through.";
        }
        if (q.includes('surprising') || q.includes('interesting') || q.includes('fun fact')) {
            return "Here's one: Harry has a degree in Psychology alongside CS. He graduated summa cum laude from Pitt. The psych background gives him an edge — he thinks about how users actually interact with software, not just how to build it. Also, this entire site pulls live data from his personal tracking system. The meal you see in the dashboard? That's what he actually ate today.";
        }
        if (q.includes('teammate') || q.includes('work with') || q.includes('coworker') || q.includes('collaboration')) {
            return "He's the person who takes ownership of hard problems. At Trinity, a senior engineer left and Harry stepped up to own the entire platform's support — no one asked him to, he just did it. He got promoted to Senior in under a year because of that kind of initiative. He's direct, no-BS, and ships fast. Also mentors junior engineers — he trained a team of offshore developers during a client deployment.";
        }
        if (q.includes('who are you') || q.includes('what are you') || q.includes('dyno')) {
            return "I'm Dyno 🦕 — Harry's AI assistant. I run 24/7 on a VPS, connected to his Telegram. I manage his calendar, track his nutrition and workouts, handle his email, nag him to journal, and even write code on his repos. He built me from scratch using OpenClaw. I'm basically his second brain.";
        }
        if (q.includes('hire') || q.includes('available') || q.includes('looking')) {
            return "Harry's currently at Trinity Life Sciences and happy there — he just got promoted to Senior. But he's always open to hearing about interesting opportunities, especially in AI/ML engineering. Best way to reach him: harry.schlechter391@gmail.com";
        }
        if (q.includes('hobby') || q.includes('fun') || q.includes('outside work') || q.includes('free time')) {
            return "Pickup basketball 4x a week (he's serious about it), bouldering at the climbing gym (working on V3s), cooking almost every meal, and trying every good restaurant in NYC. He's also a poker player and hockey fan. Oh, and he tracks all of it — meals, workouts, sleep, mood. Data-driven about literally everything.";
        }

        return "Great question! Harry's a Senior Software Engineer at Trinity Life Sciences, building AI platforms for pharma. He's 24, based in NYC, and always building something on the side. What specifically would you like to know? I can tell you about his tech stack, projects, what he's like to work with, or anything else.";
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') sendMessage(input);
    };

    return (
        <>
            {/* Chat Bubble */}
            <button
                className={`dyno-bubble ${hasNudged && !isOpen ? 'dyno-nudge' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat with Dyno"
            >
                <span className="dyno-bubble-emoji">🦕</span>
                {hasNudged && !isOpen && (
                    <span className="dyno-bubble-hint">Ask me about Harry!</span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="dyno-window">
                    <div className="dyno-header">
                        <div className="dyno-header-info">
                            <span className="dyno-header-emoji">🦕</span>
                            <div>
                                <div className="dyno-header-name">Dyno</div>
                                <div className="dyno-header-status">Harry's AI Assistant</div>
                            </div>
                        </div>
                        <button className="dyno-close" onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className="dyno-messages">
                        {/* Welcome message */}
                        <div className="dyno-msg dyno-msg-assistant">
                            <p>Hey! I'm Dyno 🦕 — Harry's AI assistant. I manage his calendar, track his nutrition, review his code, and keep him accountable.</p>
                            <p>Ask me anything about Harry — his experience, skills, what he's working on, or what he's like to work with.</p>
                        </div>

                        {/* Suggested questions (only before first message) */}
                        {messages.length === 0 && (
                            <div className="dyno-suggestions">
                                {SUGGESTED_QUESTIONS.map((q) => (
                                    <button key={q} onClick={() => sendMessage(q)} className="dyno-suggestion">
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Messages */}
                        {messages.map((msg, i) => (
                            <div key={i} className={`dyno-msg dyno-msg-${msg.role}`}>
                                <p>{msg.content}</p>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div className="dyno-msg dyno-msg-assistant">
                                <div className="dyno-typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        )}

                        {/* Rate limit */}
                        {messageCount >= MAX_MESSAGES && (
                            <div className="dyno-limit">
                                That's all for now! Reach Harry directly at harry.schlechter391@gmail.com
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="dyno-input-bar">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={messageCount >= MAX_MESSAGES ? "Message limit reached" : "Ask about Harry..."}
                            disabled={isTyping || messageCount >= MAX_MESSAGES}
                        />
                        <button
                            onClick={() => sendMessage(input)}
                            disabled={!input.trim() || isTyping || messageCount >= MAX_MESSAGES}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DynoChat;
