import React, { createContext, useContext, useState, useEffect } from 'react';

type Mode = 'personal' | 'business';

interface ModeContextType {
    mode: Mode;
    toggleMode: () => void;
    setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setModeState] = useState<Mode>(() => {
        // Always default to personal mode
        return 'personal';
    });

    useEffect(() => {
        // Save mode to localStorage whenever it changes
        localStorage.setItem('siteMode', mode);
    }, [mode]);

    const toggleMode = () => {
        setModeState(prev => prev === 'personal' ? 'business' : 'personal');
    };

    const setMode = (newMode: Mode) => {
        setModeState(newMode);
    };

    return (
        <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => {
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error('useMode must be used within ModeProvider');
    }
    return context;
};
