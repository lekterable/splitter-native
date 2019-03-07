import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { Text, View } from 'react-native'

const GET_HOUSEHOLDS_QUERY = gql`
  {
    households {
      id
      name
    }
  }
`

export default () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Query query={GET_HOUSEHOLDS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>'Loading...'</Text>
        if (error) return <Text>${`Error! ${error.message}`}</Text>

        return (
          <View>
            {data.households.map(({ id, name }, i) => (
              <Text key={id}>{`${i + 1}. ${name} `}</Text>
            ))}
          </View>
        )
      }}
    </Query>
  </View>
)
