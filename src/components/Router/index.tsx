import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Redux from '@components/Redux';
import Component from '@components/Component';
import { NotFound } from '@components/common';

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Redux} />
      <Route exact path="/redux" component={Redux} />
      <Route exact path="/component" component={Component} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
