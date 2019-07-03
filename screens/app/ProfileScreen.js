import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { Button, Text, View } from 'react-native'
import auth from '../../utils/auth'

const ME_QUERY = gql`
  {
    me {
      id
      name
      email
    }
  }
`

export default ({ navigation }) => {
  const onSignOut = async () => {
    await auth.clear()
    navigation.navigate('InitScreen')
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Query query={ME_QUERY}>
        {({ loading, error, data: { me } = {} }) => {
          if (loading) return <Text>'Loading...'</Text>
          if (error) return <Text>${`Error! ${error.message}`}</Text>

          return (
            <>
              <Text>Hi, {me.name}!</Text>
              <Button title="Sign Out" onPress={onSignOut} color="#4CB944" />
            </>
          )
        }}
      </Query>
    </View>
  )
}
