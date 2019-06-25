import gql from 'graphql-tag'
import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { Button, FlatList, Modal, Text, View } from 'react-native'

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

const GET_EXPENSE_QUERY = gql`
  query Expense($id: String!) {
    expense(id: $id) {
      id
      date
      description
      type
      householder {
        name
      }
      household {
        name
      }
      cost
    }
  }
`

export default ({ navigation }) => {
  const [selectedExpense, setSelectedExpense] = useState(null)

  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Query
        query={GET_HOUSEHOLD_QUERY}
        variables={{ id: navigation.getParam('id') }}
      >
        {({ loading, error, data: { household } = {} }) => {
          if (loading || error) return null
          return (
            <View style={{ marginTop: 100, flex: 1 }}>
              <Modal
                animationType="slide"
                visible={Boolean(selectedExpense)}
                onRequestClose={() => setSelectedExpense(null)}
              >
                <Query
                  query={GET_EXPENSE_QUERY}
                  variables={{ id: String(selectedExpense) }}
                >
                  {({ loading, error, data: { expense } }) => {
                    if (loading || error) return null
                    return (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          flex: 1
                        }}
                      >
                        <Text>#{expense.id}</Text>
                        <View>
                          <Text>Details</Text>
                          <Text>Date: {expense.date}</Text>
                          {expense.description && (
                            <Text>Description: {expense.description}</Text>
                          )}
                          <Text>Type: {expense.type}</Text>
                          <Text>Cost: {expense.cost}</Text>
                          <Text>Householder: {expense.householder.name}</Text>
                        </View>
                        <Button
                          title="Close"
                          color="#4CB944"
                          onPress={() => setSelectedExpense(null)}
                        />
                      </View>
                    )
                  }}
                </Query>
              </Modal>
              <Text>Owner: {household.owner.name}</Text>
              <View>
                <Text>Expenses: </Text>
                <FlatList
                  data={household.expenses}
                  renderItem={({ item: { id, type, cost, householder } }) => (
                    <Text key={id} onPress={() => setSelectedExpense(id)}>{`${
                      householder.name
                    } spent ${cost} on ${type}`}</Text>
                  )}
                  keyExtractor={({ id }) => id}
                />
              </View>
            </View>
          )
        }}
      </Query>
    </View>
  )
}
