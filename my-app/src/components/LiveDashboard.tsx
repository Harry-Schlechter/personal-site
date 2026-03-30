import React, { useEffect, useState } from 'react';
import './LiveDashboard.css';

interface DashboardData {
    exercise: {
        thisWeek: { type: string; emoji: string; count: number }[];
        streak: number;
        lastWorkout: string;
        lastWorkoutTime: string;
    };
    nutrition: {
        lastMeal: string;
        lastMealTime: string;
        avgCalories: number;
        avgProtein: number;
    };
    github: {
        commitsThisWeek: number;
        lastPush: string;
        streak: number;
    };
    meta: {
        totalDaysTracked: number;
        journalStreak: number;
        caffeineToday: number;
        activeProjects: string[];
    };
    lastUpdated: string;
}

const SUPABASE_URL = 'https://mrgeucdjjnxexcqcmhgr.supabase.co/rest/v1';

const LiveDashboard: React.FC = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState<'week' | 'month'>('week');

    useEffect(() => {
        fetchDashboardData();
        // Refresh every 5 minutes
        const interval = setInterval(fetchDashboardData, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const fetchDashboardData = async () => {
        try {
            // For now, use placeholder data structure
            // TODO: Wire up to Supabase public views
            const response = await fetch(`${SUPABASE_URL}/rpc/public_dashboard_stats`, {
                headers: {
                    'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY || '',
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                // Use fallback/demo data if API not set up yet
                setData(getFallbackData());
            }
        } catch {
            setData(getFallbackData());
        }
        setLoading(false);
    };

    const getFallbackData = (): DashboardData => ({
        exercise: {
            thisWeek: [
                { type: 'Basketball', emoji: '🏀', count: 3 },
                { type: 'Climbing', emoji: '🧗', count: 2 },
                { type: 'Lifting', emoji: '🏋️', count: 1 },
            ],
            streak: 14,
            lastWorkout: 'Basketball',
            lastWorkoutTime: '6 hours ago',
        },
        nutrition: {
            lastMeal: 'Buffalo chicken salad',
            lastMealTime: '3 hours ago',
            avgCalories: 2340,
            avgProtein: 168,
        },
        github: {
            commitsThisWeek: 23,
            lastPush: '2 hours ago',
            streak: 8,
        },
        meta: {
            totalDaysTracked: 28,
            journalStreak: 5,
            caffeineToday: 200,
            activeProjects: ['Dyno', 'Boxrooster', 'Personal Site'],
        },
        lastUpdated: new Date().toISOString(),
    });

    const formatTime = (iso: string) => {
        const date = new Date(iso);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

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
                    <span>Live</span>
                </div>
                <span className="ld-updated">
                    Updated {data.lastUpdated ? formatTime(data.lastUpdated) : 'just now'}
                </span>
            </div>

            <div className="ld-grid">
                {/* Active Projects */}
                <div className="ld-card ld-card-wide">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">🚀</span>
                        <span className="ld-card-title">Active Projects</span>
                        <span className="ld-card-value">{data.meta.activeProjects.length}</span>
                    </div>
                    <div className="ld-projects">
                        {data.meta.activeProjects.map((project) => (
                            <span key={project} className="ld-project-tag">{project}</span>
                        ))}
                    </div>
                </div>

                {/* Exercise This Week */}
                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">💪</span>
                        <span className="ld-card-title">This Week</span>
                    </div>
                    <div className="ld-exercise-list">
                        {data.exercise.thisWeek.map((item) => (
                            <div key={item.type} className="ld-exercise-item">
                                <span>{item.emoji}</span>
                                <span className="ld-exercise-type">{item.type}</span>
                                <span className="ld-exercise-count">×{item.count}</span>
                            </div>
                        ))}
                    </div>
                    <div className="ld-card-footer">
                        <span className="ld-streak">🔥 {data.exercise.streak} day streak</span>
                    </div>
                </div>

                {/* GitHub */}
                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">💻</span>
                        <span className="ld-card-title">GitHub</span>
                    </div>
                    <div className="ld-big-number">{data.github.commitsThisWeek}</div>
                    <div className="ld-big-label">commits this week</div>
                    <div className="ld-card-footer">
                        <span>Last push: {data.github.lastPush}</span>
                    </div>
                </div>

                {/* Last Meal */}
                <div className="ld-card">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">🍽️</span>
                        <span className="ld-card-title">Last Meal</span>
                    </div>
                    <div className="ld-meal-name">{data.nutrition.lastMeal}</div>
                    <div className="ld-meal-time">{data.nutrition.lastMealTime}</div>
                    <div className="ld-card-footer">
                        <span>Avg: {data.nutrition.avgCalories} cal · {data.nutrition.avgProtein}g protein</span>
                    </div>
                </div>

                {/* Journal */}
                <div className="ld-card ld-card-small">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">📓</span>
                        <span className="ld-card-title">Journal</span>
                    </div>
                    <div className="ld-big-number">{data.meta.journalStreak}</div>
                    <div className="ld-big-label">day streak</div>
                </div>

                {/* Caffeine */}
                <div className="ld-card ld-card-small">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">☕</span>
                        <span className="ld-card-title">Caffeine</span>
                    </div>
                    <div className="ld-big-number">{data.meta.caffeineToday}mg</div>
                    <div className="ld-big-label">today</div>
                </div>

                {/* Days Tracked */}
                <div className="ld-card ld-card-small">
                    <div className="ld-card-header">
                        <span className="ld-card-icon">📊</span>
                        <span className="ld-card-title">Tracking</span>
                    </div>
                    <div className="ld-big-number">{data.meta.totalDaysTracked}</div>
                    <div className="ld-big-label">days logged</div>
                </div>
            </div>
        </div>
    );
};

export default LiveDashboard;
