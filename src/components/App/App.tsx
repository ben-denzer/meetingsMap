import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import EnthusiasmContainer from '../../containers/EnthusiasmContainer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Map from '../Map/Map';
import NotFound from '../NotFound/NotFound';
import { AppWrapper } from './AppStyles';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/enthusiasm" render={() => <EnthusiasmContainer />} />
          <Route
            path="/map"
            render={() => <Map defaultCenter={{ lat: 36.05, lng: -115 }} defaultZoom={11} />}
          />
          <Route component={NotFound} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
