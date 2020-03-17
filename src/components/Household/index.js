import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { ErrorScreen, LoadingScreen } from '../shared'
import ExpenseModal from './ExpenseModal'

const GET_HOUSEHOLD_QUERY = gql`
  query Household($id: String!) {
    household(id: $id) {
      id
      owner {
        id
        name
      }
      name
      expenses {
        id
        cost
        type
        householder {
          name
        }
      }
      householders {
        id
        name
      }
    }
  }
`

const Household = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_HOUSEHOLD_QUERY, {
    variables: { id: navigation.getParam('id') }
  })
  const [selectedExpenseId, setSelectedExpenseId] = useState(null)

  const handleClose = () => setSelectedExpenseId(null)

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { household } = data
  return (
    <View style={{ alignItems: 'center', flex: 1, marginBottom: 50 }}>
      <View style={{ marginTop: 100, flex: 1 }}>
        <Text>Owner: {household.owner.name}</Text>
        <View>
          <Text>Expenses: </Text>
          <FlatList
            data={household.expenses}
            renderItem={({ item: { id, type, cost, householder } }) => (
              <Text
                key={id}
                onPress={() => setSelectedExpenseId(String(id))}
              >{`${householder.name} spent ${cost} on ${type}`}</Text>
            )}
            keyExtractor={({ id }) => id}
          />
          <Button color="#4CB944" title="Add Expense" />
        </View>
      </View>
      <ExpenseModal
        selectedExpenseId={selectedExpenseId}
        onClose={handleClose}
      />
    </View>
  )
}

export default Household
