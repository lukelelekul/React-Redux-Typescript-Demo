import { FC } from 'react';

import ErrorBoundary from './ErrorBoundary';

const Main: FC = () => {
  return (
    <ErrorBoundary>
      <div>I'm React Main</div>
    </ErrorBoundary>
  );
};

export default Main;
