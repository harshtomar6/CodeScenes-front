import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3001/'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);

registerServiceWorker();
