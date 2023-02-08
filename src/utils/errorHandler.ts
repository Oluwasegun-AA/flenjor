import { ApolloError } from '@apollo/client';

const errorHandler = (error: ApolloError) => {
  return error.message || 'An Error Occured';
};

export const log = (string: any) => {
  process.stdout.write(`${string}\n`);
};

export default errorHandler;
