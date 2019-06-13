import { Formik } from 'formik'
import gql from 'graphql-tag'
import React from 'react'
import { Mutation } from 'react-apollo'
import { Button, TextInput, View } from 'react-native'
import auth from '../../utils/auth'

const LOGIN_USER_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export default ({ navigation }) => {
  const handleSubmit = async (values, login, client) => {
    const { data } = await login({
      variables: { ...values }
    })
    await auth.authenticate(data.login)
    await client.resetStore()
    navigation.navigate('InitScreen')
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Mutation mutation={LOGIN_USER_QUERY}>
        {(login, { client }) => (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => handleSubmit(values, login, client)}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
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
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
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
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Button title="Sign In" onPress={handleSubmit} />
                <Button
                  title="Sign Up"
                  onPress={() => navigation.navigate('SignUp')}
                />
              </View>
            )}
          </Formik>
        )}
      </Mutation>
    </View>
  )
}
