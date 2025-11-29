'use client';

interface ErrorProps {
    error: Error;
};

export default function Error({ error }: ErrorProps) {
    

    return (
        <div>
            <h2>Downloading error...</h2>
            <p>{error.message}</p>
        </div>
    )
};