import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Button, TextInput, View } from 'react-native';
import auth from '../../utils/auth';

const LOGIN_USER_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
export default class extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    const { email, password } = this.state
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
                onChangeText={text => this.setState({ email: text })}
                value={email}
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
                onChangeText={text => this.setState({ password: text })}
                value={password}
              />
              <Button
                title="Sign In"
                onPress={async () => {
                  const { data } = await login({
                    variables: { email, password }
                  })
                  await auth.authenticate(data.login)
                  await client.resetStore()
                  this.props.navigation.navigate('InitScreen')
                }}
              />
              <Button
                title="Sign Up"
                onPress={() => this.props.navigation.navigate('SignUp')}
              />
            </View>
          )}
        </Mutation>
      </View>
    )
  }
}
