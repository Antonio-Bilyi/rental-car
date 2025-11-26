'use client';

interface ErrorProps {
    error: Error;
};

const Error = ({ error }: ErrorProps) => {
    

    return (
        <div>
            <h2>Oooops....something went wrong!</h2>

            <p>{error.message}</p>
        </div>
    )
};

export default Error;

