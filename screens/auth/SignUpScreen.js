import gql from 'graphql-tag'
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { Button, TextInput, View } from 'react-native'
import auth from '../../utils/auth'

const REGISTER_USER_QUERY = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`

export default ({ navigation }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Mutation mutation={REGISTER_USER_QUERY}>
        {(register, { client }) => (
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
              placeholder="name"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={name => setForm({ ...form, name })}
              value={form.name}
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
              title="Sign Up"
              onPress={async () => {
                const { data } = await register({
                  variables: { ...form }
                })
                await auth.authenticate(data.register)
                await client.resetStore()
                navigation.navigate('InitScreen')
              }}
            />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        )}
      </Mutation>
    </View>
  )
}
