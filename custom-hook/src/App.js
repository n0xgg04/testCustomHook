import React, { useState, useRef } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef(null);
  const intervalRef = useRef(null);
  const countdown = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    const value = inputRef.current.value;
    setSeconds(value);
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000)
  }

  React.useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      margin: '0 auto',
    }}>
      <h1>Coundown app</h1>
      <input ref={inputRef} type="number" placeholder="Enter number of seconds" />
      {seconds > 0 && <h2>{seconds}</h2>}
      <button onClick={countdown}>Start</button>
    </div>
  );
}

export default App;
