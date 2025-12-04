import React from 'react';

const DataLog = ({ windowData }) => {
    return (
        <div className="glass-card">
            <h3 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                Recent Readings (Window)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    <div>TIME</div>
                    <div>RAIN</div>
                    <div>WIND</div>
                    <div>TEMP</div>
                </div>
                {windowData.map((row, index) => (
                    <div key={index} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        padding: '0.75rem 0.5rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        alignItems: 'center'
                    }}>
                        <div style={{ fontWeight: 500 }}>{row.timestamp}</div>
                        <div style={{ color: '#63ff85' }}>{row.rainfall} mm</div>
                        <div style={{ color: '#5ac8fa' }}>{row.windSpeed} km/h</div>
                        <div>{row.temperature}°</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataLog;
