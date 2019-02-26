import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Root from './screens'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/' }),
  cache: new InMemoryCache()
})

export default () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
)
