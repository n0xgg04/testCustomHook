import React from 'react';
import useCountdown from './hooks/useCountdown';

function App() {
  const [sec, setSecs] = useCountdown(null);
  const inputRef = React.useRef(null);

  console.log("App component rendered")

  React.useEffect(() => {
    console.log("App component mounted or updated")
  }, [])

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      margin: '0 auto',
    }}>
      <h1>Countdown app</h1>
      {sec > 0 ? <h2>{sec}</h2> : <h2>Time's up!</h2>}
      <input ref={inputRef} type="number" placeholder="Enter seconds" />
      <button onClick={() => {
        setSecs(inputRef.current.value);
        console.log("Start countdown")
      }}>Start</button>
    </div>
  );
}

export default App;
