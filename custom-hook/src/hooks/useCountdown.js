import React from 'react';

const useCountdown = (seconds) => {
    const [sec, setSecs] = React.useState(seconds);
    const intervalRef = React.useRef(null);

    React.useEffect(() => {
        if (sec > 0) {
            clearInterval(intervalRef.current);
            console.log("Make new interval");
            intervalRef.current = setInterval(() => {
                setSecs(prevSecs => prevSecs - 1);
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [sec]);

    return [sec, setSecs];
};

export default useCountdown;
