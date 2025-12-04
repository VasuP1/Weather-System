import React from 'react';

const RiskMonitor = ({ riskScore, riskLevel }) => {
    const { level, color } = riskLevel;

    return (
        <div className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Dynamic background glow based on risk */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: color,
                filter: 'blur(60px)',
                opacity: 0.4,
                zIndex: 0
            }} />

            <div style={{ zIndex: 1 }}>
                <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Risk Level
                </h2>
                <div style={{ fontSize: '5rem', fontWeight: 200, lineHeight: 1, margin: '1rem 0', textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {level}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                    Score: {riskScore}
                </div>
            </div>
        </div>
    );
};

export default RiskMonitor;
