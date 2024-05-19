'use client'

const ErrorBoundary = ({error, reset}: {
    error: Error;
    reset: () => void;
}) => {
    return (
        <>
            {error.message}

            <button
                onClick={reset}
            >
                Try again
            </button>
        </>
    );
};

export default ErrorBoundary;