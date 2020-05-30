import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './assets/images/spacex-logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ display: 'block', margin: 'auto', marginTop: 32 }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flightNumber" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
