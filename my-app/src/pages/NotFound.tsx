import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFound: React.FC = () => {
    usePageTitle('Page Not Found');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.7 }}>
                This page doesn't exist — but I do!
            </p>
            <Link to="/" style={{
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                background: 'var(--accent-color, #6EACDA)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem'
            }}>
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
