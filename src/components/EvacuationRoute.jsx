// src/components/EvacuationRoute.jsx
import React, { useState } from 'react';
import { getAllLocations, findShortestEvacuationRoute } from '../utils/evacuationGraph';

const EvacuationRoute = () => {
    const locations = getAllLocations();
    const [start, setStart] = useState('Coastal City');
    const [end, setEnd] = useState('Regional Shelter');
    const [result, setResult] = useState(null);

    const handleFindRoute = () => {
        const res = findShortestEvacuationRoute(start, end);
        setResult(res);
    };

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3
                style={{
                    marginTop: 0,
                    marginBottom: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase'
                }}
            >
                Evacuation Route Planner
            </h3>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>From</label>
                    <select
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        style={{
                            padding: '0.4rem 0.6rem',
                            borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(0,0,0,0.2)',
                            color: '#fff'
                        }}
                    >
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>To</label>
                    <select
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        style={{
                            padding: '0.4rem 0.6rem',
                            borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(0,0,0,0.2)',
                            color: '#fff'
                        }}
                    >
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={handleFindRoute}
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #34c759, #0f9d58)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                }}
            >
                Find Best Route
            </button>

            {result && (
                <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    {result.distance === Infinity ? (
                        <p>No route found between selected locations.</p>
                    ) : (
                        <>
                            <p><strong>Best route:</strong> {result.path.join(' → ')}</p>
                            <p><strong>Total time:</strong> {result.distance} minutes</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default EvacuationRoute;
