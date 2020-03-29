import { gql, useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import auth from '../../utils/auth'
import { Button, Container, TextInput } from '../shared'

const REGISTER_USER_QUERY = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`

const SignUp = ({ navigation }) => {
  const [register, { client }] = useMutation(REGISTER_USER_QUERY)

  const handleSubmit = async values => {
    const { data } = await register({
      variables: { ...values }
    })
    await auth.authenticate(data.register)
    await client.resetStore()
    navigation.navigate('Init')
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Container>
            <TextInput
              name="name"
              value={values.name}
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
            <Button title="Sign Up" onPress={handleSubmit} />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('SignIn')}
            />
          </Container>
        )}
      </Formik>
    </Container>
  )
}

export default SignUp
