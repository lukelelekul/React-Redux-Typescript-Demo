import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '@redux';

import Main from '@components/Main';

import './index.scss';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
