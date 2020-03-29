import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Text } from 'react-native'
import auth from '../../utils/auth'
import { Button, Container, ErrorScreen, LoadingScreen } from '../shared'

const ME_QUERY = gql`
  {
    me {
      id
      name
      email
    }
  }
`

const Profile = ({ navigation }) => {
  const { loading, error, data } = useQuery(ME_QUERY)

  const onSignOut = async () => {
    await auth.clear()
    navigation.navigate('Init')
  }

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { me } = data
  return (
    <Container>
      <Text>Hi, {me.name}!</Text>
      <Button title="Sign Out" onPress={onSignOut} />
    </Container>
  )
}

export default Profile
