import { gql, useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import auth from '../../utils/auth'
import { Button, Container, TextInput } from '../shared'

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
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Container>
            <TextInput
              name="email"
              value={values.email}
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInput
              name="password"
              value={values.password}
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
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
