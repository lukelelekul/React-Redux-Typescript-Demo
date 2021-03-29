import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Redux from '@components/Redux';
import Component from '@components/Component';
import Hooks from '@components/Hooks';

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Redux} />
      <Route exact path="/redux" component={Redux} />
      <Route exact path="/component" component={Component} />
      <Route exact path="/hooks" component={Hooks} />
      <Route component={Redux} />
    </Switch>
  );
};

export default Router;
