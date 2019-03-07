import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { Text, View } from 'react-native'
import HouseholdList from '../../components/HouseholdList'

const GET_HOUSEHOLDS_QUERY = gql`
  {
    households {
      id
      name
    }
  }
`

export default ({ navigation }) => {
  const handlePress = (id, name) =>
    navigation.navigate('Household', { id, name })

  return (
    <View style={{ alignItems: 'center' }}>
      <Query query={GET_HOUSEHOLDS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>'Loading...'</Text>
          if (error) return <Text>${`Error! ${error.message}`}</Text>

          return (
            <View style={{ marginTop: 100 }}>
              <HouseholdList
                households={data.households}
                onPress={handlePress}
              />
            </View>
          )
        }}
      </Query>
    </View>
  )
}
