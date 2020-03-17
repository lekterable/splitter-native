import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Button, Text, View } from 'react-native'
import auth from '../../utils/auth'
import { ErrorScreen, LoadingScreen } from '../shared'

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
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Hi, {me.name}!</Text>
      <Button title="Sign Out" onPress={onSignOut} color="#4CB944" />
    </View>
  )
}

export default Profile
