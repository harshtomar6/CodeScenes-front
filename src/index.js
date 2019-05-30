import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  fetchOptions: {
    headers: {
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YzIwYjdmMTljODk5NDNkZjhiNDQ3ZDgifQ.DPmj0SElGww8CMmkLfl3or-kWjS4RdABld-4wJB_u6o`
    }
  },
  headers: {
    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YzIwYjdmMTljODk5NDNkZjhiNDQ3ZDgifQ.DPmj0SElGww8CMmkLfl3or-kWjS4RdABld-4wJB_u6o`
  }
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
