import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: " http://localhost:3000/api/graphql",
  cache: new InMemoryCache()
});
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
        <App />
        </Provider>
 
      </ApolloProvider>
 
  </React.StrictMode>,
)
