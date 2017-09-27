import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { browserHistory } from 'react-router'
import { App } from './app';
import { About, MembersPage, MemberPageContainer, PageBeritaController, NotificationController } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
        <Route path="/member" component={MemberPageContainer} />
      </Route>

      <Route path="/berita" component={PageBeritaController} >
        <IndexRoute component={PageBeritaController} />
        <Route path="/berita/notifikasi" component={NotificationController} />
      </Route>

    </Router>
  );
}
