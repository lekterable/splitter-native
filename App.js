import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Root from './screens'
import auth from './utils/auth'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/' })

const authLink = setContext(async (_, { headers }) => {
  const token = await auth.token()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
)
