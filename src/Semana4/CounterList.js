import { useState } from 'react';
import './s4.css';

let initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div className="component-container">
      <h2 className="component-title">CounterList</h2>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => {
              handleIncrementClick(i);
            }}>
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}