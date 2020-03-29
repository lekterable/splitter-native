import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import { REGISTER_USER_QUERY } from '../../queries'
import auth from '../../utils/auth'
import { Button, Container, TextInput } from '../shared'

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
              value={values.name}
              placeholder="name"
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
            />
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
