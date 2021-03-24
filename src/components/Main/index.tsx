import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import { Message } from '@components/common';
import Router from '../Router';

const Main: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Message />
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Main;
