import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, reset, incrementByAmount } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncByAmount() {
    // Convert the amount safely to a number, defaulting to 0 if NaN
    const value = Number(amount) || 0;
    dispatch(incrementByAmount(value));
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>
        +
      </button>

      <p>
        Count : {isNaN(count) ? 0 : count} {/* ✅ Fallback for NaN display */}
      </p>

      <button onClick={handleDecrementClick}>
        -
      </button>

      <br /><br />
      <label htmlFor="Number">Enter a number: </label>
      <input
        type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : 0)}
      />

      <br /><br />

      <button onClick={handleIncByAmount}>
        Increment by Amount
      </button>

      <br /><br />

      <button onClick={handleResetClick}>
        Reset
      </button>

    </div>
  );
}

export default App;
