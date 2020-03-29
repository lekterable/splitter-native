import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { ErrorScreen, LoadingScreen } from '../shared'
import HouseholdList from '../shared/HouseholdList'
import * as Styled from './styled'

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

  const handlePress = id => navigation.navigate('Household', { id })

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { households } = data
  return (
    <Styled.Container>
      <HouseholdList households={households} onPress={handlePress} />
    </Styled.Container>
  )
}

export default Home
