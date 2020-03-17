import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { View } from 'react-native'
import { ErrorScreen, LoadingScreen } from '../shared'
import HouseholdList from '../shared/HouseholdList'

const GET_HOUSEHOLDS_QUERY = gql`
  {
    households {
      id
      name
    }
  }
`

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_HOUSEHOLDS_QUERY)

  const handlePress = (id, name) =>
    navigation.navigate('Household', { id, name })

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { households } = data
  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <HouseholdList households={households} onPress={handlePress} />
    </View>
  )
}

export default Home
