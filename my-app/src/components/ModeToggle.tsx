import React from 'react';
import { useMode } from '../context/ModeContext';
import './ModeToggle.css';

const ModeToggle: React.FC = () => {
    const { mode, toggleMode } = useMode();

    return (
        <div className="mode-toggle-container" style={{ display: 'none' }}>
            <button 
                className={`mode-toggle ${mode === 'personal' ? 'personal-active' : 'business-active'}`}
                onClick={toggleMode}
            >
                <span className={`toggle-option ${mode === 'personal' ? 'active' : ''}`}>
                    <span className="toggle-text">Harry</span>
                </span>
                <span className={`toggle-option ${mode === 'business' ? 'active' : ''}`}>
                    <span className="toggle-text">Harry's Custom Sites</span>
                </span>
                <span className="toggle-slider" />
            </button>
        </div>
    );
};

export default ModeToggle;
