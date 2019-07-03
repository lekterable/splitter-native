import { Formik } from 'formik'
import gql from 'graphql-tag'
import React from 'react'
import { Mutation } from 'react-apollo'
import { Button, TextInput, View } from 'react-native'
import auth from '../../utils/auth'

const REGISTER_USER_QUERY = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`

export default ({ navigation }) => {
  const handleSubmit = async (values, register, client) => {
    const { data } = await register({
      variables: { ...values }
    })
    await auth.authenticate(data.register)
    await client.resetStore()
    navigation.navigate('InitScreen')
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Mutation mutation={REGISTER_USER_QUERY}>
        {(register, { client }) => (
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={values => handleSubmit(values, register, client)}
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
                  placeholder="name"
                  autoCapitalize="none"
                  autoComplete="off"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
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
                <Button
                  title="Sign Up"
                  onPress={handleSubmit}
                  color="#4CB944"
                />
                <Button
                  title="Sign In"
                  onPress={() => navigation.navigate('SignIn')}
                  color="#4CB944"
                />
              </View>
            )}
          </Formik>
        )}
      </Mutation>
    </View>
  )
}
