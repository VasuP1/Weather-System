import React from 'react';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';

const Controls = ({ isPlaying, onPlayPause, onStep, onRestart }) => {
    const buttonStyle = {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        borderRadius: '30px',
        padding: '0.75rem 1.5rem',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        backdropFilter: 'blur(10px)',
        transition: 'background 0.2s'
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <button
                onClick={onPlayPause}
                style={{
                    ...buttonStyle,
                    background: isPlaying ? 'rgba(255, 204, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                }}
            >
                {isPlaying ? <><Pause size={20} fill="#fff" /> Pause</> : <><Play size={20} fill="#fff" /> Start</>}
            </button>

            <button
                onClick={onStep}
                disabled={isPlaying}
                style={{
                    ...buttonStyle,
                    opacity: isPlaying ? 0.5 : 1,
                    cursor: isPlaying ? 'not-allowed' : 'pointer'
                }}
            >
                <SkipForward size={20} fill="#fff" /> Step
            </button>

            <button
                onClick={onRestart}
                style={{
                    ...buttonStyle,
                    background: 'rgba(255, 59, 48, 0.2)'
                }}
            >
                <RotateCcw size={20} /> Restart
            </button>
        </div>
    );
};

export default Controls;
