import React, { useEffect, useState } from 'react';
import './LiveDashboard.css';

interface StatsData {
    exercise_this_week: number;
    exercise_days: number;
    last_meal: string;
    journal_streak: number;
    journal_days: number;
    caffeine_today: number;
    active_projects: number;
    github_commits: number;
}

const SUPABASE_URL = 'https://mrgeucdjjnxexcqcmhgr.supabase.co/rest/v1';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

const LiveDashboard: React.FC = () => {
    const [data, setData] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            if (SUPABASE_ANON_KEY) {
                const response = await fetch(`${SUPABASE_URL}/rpc/public_dashboard_stats`, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                    setIsLive(true);
                } else {
                    setData(getFallback());
                }
            } else {
                setData(getFallback());
            }
        } catch {
            setData(getFallback());
        }
        setLoading(false);
    };

    const getFallback = (): StatsData => ({
        exercise_this_week: 4,
        exercise_days: 7,
        last_meal: 'Buffalo chicken salad',
        journal_streak: 5,
        journal_days: 7,
        caffeine_today: 236,
        active_projects: 3,
        github_commits: 12,
    });

    if (loading) {
        return (
            <div className="ld-loading">
                <div className="ld-pulse" />
                <span>Loading live data...</span>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="ld-container">
            <div className="ld-header">
                <div className="ld-live-indicator">
                    <span className="ld-live-dot" />
                    <span>{isLive ? 'Live' : 'Demo'}</span>
                </div>
            </div>

            <div className="ld-grid">
                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">🚀</span>
                        <span className="ld-card-title">Active Projects</span>
                    </div>
                    <div className="ld-big-number">{data.active_projects}</div>
                    <div className="ld-big-label">in progress</div>
                </div>

                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">💪</span>
                        <span className="ld-card-title">Exercise</span>
                    </div>
                    <div className="ld-big-number">{data.exercise_this_week}/{data.exercise_days}</div>
                    <div className="ld-big-label">days this week</div>
                </div>

                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">💻</span>
                        <span className="ld-card-title">GitHub</span>
                    </div>
                    <div className="ld-big-number">{data.github_commits}</div>
                    <div className="ld-big-label">commits this week</div>
                </div>

                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">🍽️</span>
                        <span className="ld-card-title">Last Meal</span>
                    </div>
                    <div className="ld-meal-name">{data.last_meal}</div>
                </div>

                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">📓</span>
                        <span className="ld-card-title">Journal</span>
                    </div>
                    <div className="ld-big-number">{data.journal_streak}/{data.journal_days}</div>
                    <div className="ld-big-label">days this week</div>
                </div>

                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">☕</span>
                        <span className="ld-card-title">Caffeine</span>
                    </div>
                    <div className="ld-big-number">{data.caffeine_today}mg</div>
                    <div className="ld-big-label">today</div>
                </div>
            </div>
        </div>
    );
};

export default LiveDashboard;
