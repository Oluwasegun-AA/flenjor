import { onError } from '@apollo/client/link/error';
import { log } from '../utils/errorHandler';

export default onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) log(`[Network error]: ${networkError}`);
});
