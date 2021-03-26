import { FC, useState } from 'react';

import Child from '../Child';

const State: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <span>{count}</span>
      <Child />
    </div>
  );
};

export default State;
