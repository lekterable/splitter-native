import { gql, useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import { Button, TextInput, View } from 'react-native'
import auth from '../../utils/auth'

const LOGIN_USER_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const SignIn = ({ navigation }) => {
  const [login, { client }] = useMutation(LOGIN_USER_QUERY)

  const handleSubmit = async values => {
    const { data } = await login({
      variables: { ...values }
    })
    await auth.authenticate(data.login)
    await client.resetStore()
    navigation.navigate('Init')
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
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
            <Button title="Sign In" onPress={handleSubmit} color="#4CB944" />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
              color="#4CB944"
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default SignIn
