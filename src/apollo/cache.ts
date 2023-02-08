import { InMemoryCache, makeVar } from '@apollo/client';

export type InAppCache = {
  isMobile?: boolean;
  isExpanded?: boolean;
  pageTitle?: string;
};

export const inAppDefaults = makeVar<InAppCache>({
  isMobile: false,
  isExpanded: true,
  pageTitle: '',
});

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          merge: true,
        },
        appData: {
          read() {
            return inAppDefaults();
          },
        },
      },
    },
  },
});
