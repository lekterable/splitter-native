import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GROUPS_QUERY } from '../../queries'
import { ErrorScreen, LoadingScreen } from '../shared'
import GroupList from '../shared/GroupList'
import * as Styled from './styled'

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_GROUPS_QUERY)

  const handlePress = id => navigation.navigate('Group', { id })

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { groups } = data
  return (
    <Styled.Container>
      <GroupList groups={groups} onPress={handlePress} />
    </Styled.Container>
  )
}

export default Home
