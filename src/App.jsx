import { useMemo, useState } from 'react'
import useCustomMemo from './hooks/use-memo-hook'
import './App.css'

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive calculation");
    return counter1 * counter1;
  }

  const memoizedValue = useCustomMemo(squaredValue , [counter1]);

  return (
    <div className='App'>
      <h2>Counter: {counter1}</h2>
      <h2>Squared Counter: {memoizedValue}</h2>
      <button onClick={() => setCounter1(counter1+1)}>Increment</button>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2-1)}>Decrement</button>
    </div>
  )
}

export default App
