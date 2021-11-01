import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(1);
  }

  return (
    <>
      <h2>Current count: {count}</h2>
      <p>Upvote now!</p>
      <button className='button-increment' onClick={increment}>Increment</button>
      <br />
      <p>Reset now!</p>
      <button className='button-reset' onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
