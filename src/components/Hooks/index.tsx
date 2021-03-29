import { FC, useState, useEffect } from 'react';

const Hooks: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <span>{count}</span>
    </div>
  );
};

export default Hooks;
