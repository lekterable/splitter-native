import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { Button, Text, View } from 'react-native'
import { handleSignOut } from '../../utils/auth'

const GET_EXPENSES_QUERY = gql`
  {
    expenses(household: "1") {
      id
      type
    }
  }
`

export default ({ navigation }) => {
  const onSignOut = () =>
    handleSignOut().then(() => navigation.navigate('InitScreen'))

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Query query={GET_EXPENSES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>'Loading...'</Text>
          if (error) return <Text>${`Error! ${error.message}`}</Text>

          return (
            <View>
              {data.expenses.map(({ id, type }, i) => (
                <Text key={id}>{`${i + 1}. ${type} `}</Text>
              ))}
            </View>
          )
        }}
      </Query>
      <Button title="Sign Out" onPress={onSignOut} />
    </View>
  )
}
