import React, { useState, useEffect, useMemo } from 'react';
import rawData from '../data/weatherData.json';
import { calculateRisk, getRiskLevel } from '../utils/weatherAlgorithm';
import RiskMonitor from './RiskMonitor';
import WeatherChart from './WeatherChart';
import DataLog from './DataLog';
import Controls from './Controls';
import EvacuationRoute from './EvacuationRoute';


const Dashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Derived state: Calculate risk for all points up to currentIndex
    const processedHistory = useMemo(() => {
        const history = [];
        for (let i = 0; i <= currentIndex; i++) {
            const start = Math.max(0, i - 4);
            const windowData = rawData.slice(start, i + 1);
            const riskScore = calculateRisk(windowData);
            history.push({ ...rawData[i], riskScore });
        }
        return history;
    }, [currentIndex]);

    const currentDataPoint = processedHistory[processedHistory.length - 1];
    const currentRiskScore = currentDataPoint.riskScore;
    const currentRiskLevel = getRiskLevel(currentRiskScore);
    const currentWindow = rawData.slice(Math.max(0, currentIndex - 4), currentIndex + 1);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                if (currentIndex < rawData.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    setIsPlaying(false);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, currentIndex]);

    const handleStep = () => {
        if (currentIndex < rawData.length - 1) setCurrentIndex(prev => prev + 1);
    };

    const handleRestart = () => {
        setIsPlaying(false);
        setCurrentIndex(0);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', width: '100%', boxSizing: 'border-box' }}>

            {/* Header Section */}
            <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
                <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 400, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                    WeatherGuard
                </h1>
                <p style={{ margin: '0.5rem 0 0', fontSize: '1.2rem', opacity: 0.8 }}>
                    {currentDataPoint.timestamp}
                </p>
                <div style={{ fontSize: '5rem', fontWeight: 200, letterSpacing: '-2px', textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                    {currentDataPoint.temperature}°
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, opacity: 0.9 }}>
                    Rain: {currentDataPoint.rainfall}mm  •  Wind: {currentDataPoint.windSpeed}km/h
                </div>
            </header>

            {/* Main Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>

                {/* Risk Monitor (Hero Widget) */}
                <div style={{ height: '250px' }}>
                    <RiskMonitor riskScore={currentRiskScore} riskLevel={currentRiskLevel} />
                </div>

                {/* Evacuation Route Planner (Graph + Dijkstra) */}
                <div style={{ marginTop: '3rem'}}>
                    <EvacuationRoute />
                </div>

                {/* Chart */}
                <WeatherChart data={processedHistory} />

                {/* Data Log */}
                <DataLog windowData={currentWindow} />

            </div>

            {/* Controls (Floating Bottom) */}
            <div style={{ position: 'sticky', bottom: '20px', marginTop: '2rem', zIndex: 10 }}>
                <Controls
                    isPlaying={isPlaying}
                    onPlayPause={() => setIsPlaying(!isPlaying)}
                    onStep={handleStep}
                    onRestart={handleRestart}
                />
            </div>

        </div>
    );
};

export default Dashboard;
