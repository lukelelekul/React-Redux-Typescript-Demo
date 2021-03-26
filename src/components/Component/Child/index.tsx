import { FC, memo } from 'react';

const Child: FC = () => {
  console.log('child');
  return <div>I'm React Child</div>;
};

export default memo(Child, () => true);
