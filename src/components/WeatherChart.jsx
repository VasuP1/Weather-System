import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ data }) => {
    return (
        <div className="glass-card" style={{ height: '350px', width: '100%', padding: '1.5rem 1rem' }}>
            <div style={{ paddingLeft: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Live Trends</span>
            </div>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="timestamp"
                        stroke="rgba(255,255,255,0.5)"
                        tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="rgba(255,255,255,0.5)"
                        tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(10px)',
                            border: 'none',
                            borderRadius: '12px',
                            color: '#fff'
                        }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 }}
                    />
                    <Line type="monotone" dataKey="rainfall" stroke="#63ff85" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="windSpeed" stroke="#5ac8fa" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="riskScore" stroke="#ffcc00" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherChart;
