import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import { LOGIN_USER_QUERY } from '../../queries'
import auth from '../../utils/auth'
import { Button, Container, TextInput } from '../shared'

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
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Container>
            <TextInput
              value={values.email}
              placeholder="email"
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <TextInput
              value={values.password}
              placeholder="password"
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
            <Button title="Sign In" onPress={handleSubmit} />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </Container>
        )}
      </Formik>
    </Container>
  )
}

export default SignIn
