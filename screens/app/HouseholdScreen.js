import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { FlatList, Text, View } from 'react-native'

const GET_HOUSEHOLD_QUERY = gql`
  query Household($id: String!) {
    household(id: $id) {
      id
      owner {
        id
        name
      }
      name
      expenses {
        id
        cost
        type
        householder {
          name
        }
      }
      householders {
        id
        name
      }
    }
  }
`

export default ({ navigation }) => (
  <View style={{ alignItems: 'center' }}>
    <Query
      query={GET_HOUSEHOLD_QUERY}
      variables={{ id: navigation.getParam('id') }}
    >
      {({ loading, error, data: { household } = {} }) => {
        if (loading) return <Text>'Loading...'</Text>
        if (error) return <Text>${`Error! ${error.message}`}</Text>

        return (
          <View style={{ marginTop: 100 }}>
            <Text>Owner: {household.owner.name}</Text>
            <View>
              <Text>Expenses: </Text>
              <FlatList
                data={household.expenses}
                renderItem={({ item: { id, type, cost, householder } }) => (
                  <Text key={id}>{`${
                    householder.name
                  } spent ${cost} on ${type}`}</Text>
                )}
                keyExtractor={({ id }) => id}
              />
            </View>
          </View>
        )
      }}
    </Query>
  </View>
)
