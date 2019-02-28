import gql from 'graphql-tag'
import React from 'react'
import { Mutation } from 'react-apollo'
import { Button, Text, View } from 'react-native'
import { handleSignIn } from '../../utils/auth'

export const LOGIN_USER_QUERY = gql`
  mutation {
    login(email: "joey@gmail.com", password: "joey123")
  }
`

export default ({ navigation }) => {
  const onSignIn = token =>
    handleSignIn(token).then(() => navigation.navigate('InitScreen'))

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Mutation mutation={LOGIN_USER_QUERY}>
        {login => (
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <Text>Sign In</Text>
            <Button
              title="Sign In"
              onPress={async () => {
                const { data } = await login()
                onSignIn(data.login)
              }}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        )}
      </Mutation>
    </View>
  )
}
