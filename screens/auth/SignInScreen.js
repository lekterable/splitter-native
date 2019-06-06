import gql from 'graphql-tag'
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { Button, TextInput, View } from 'react-native'
import auth from '../../utils/auth'

const LOGIN_USER_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export default ({ navigation }) => {
  const [form, setForm] = useState({ email: '', password: '' })

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Mutation mutation={LOGIN_USER_QUERY}>
        {(login, { client }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <TextInput
              style={{
                height: 30,
                borderColor: 'gray',
                width: 150,
                borderWidth: 1,
                textAlign: 'center',
                borderRadius: 10
              }}
              placeholder="email"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={email => setForm({ ...form, email })}
              value={form.email}
            />
            <TextInput
              style={{
                height: 30,
                borderColor: 'gray',
                width: 150,
                borderWidth: 1,
                textAlign: 'center',
                borderRadius: 10
              }}
              placeholder="password"
              autoCapitalize="none"
              autoComplete="off"
              secureTextEntry
              onChangeText={password => setForm({ ...form, password })}
              value={form.password}
            />
            <Button
              title="Sign In"
              onPress={async () => {
                const { data } = await login({
                  variables: { ...form }
                })
                await auth.authenticate(data.login)
                await client.resetStore()
                navigation.navigate('InitScreen')
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
