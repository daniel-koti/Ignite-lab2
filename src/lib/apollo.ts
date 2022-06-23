import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o14q5e03dr01xmfoym3cz2/master',
  cache: new InMemoryCache()
})