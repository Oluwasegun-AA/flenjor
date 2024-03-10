import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {
  ApolloProvider,
  createHttpLink,
  ApolloClient,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import errorLink from './apollo/errorHandling';
import cache from './apollo/cache';

export const baseUrl =
  process.env.BACKEND_BASE_URL || 'https://backend_staging.herokuapp.com';

const httpLink = createHttpLink({ uri: `${baseUrl}/graphql` });

const authLink = setContext(async (_, { headers }) => {
  const token = sessionStorage.getItem('userToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'none',
      notifyOnNetworkStatusChange: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
