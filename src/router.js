import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Desktop view
import App from 'App';
import { AboutPage, HomePage, MusersProject } from 'pages';

const routes = (
  <Route
    render={() => {
      return (
        <App>
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route
              path="/musers"
              render={() => {
                return <MusersProject />;
              }}
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </App>
      );
    }}
  />
);

export default routes;
