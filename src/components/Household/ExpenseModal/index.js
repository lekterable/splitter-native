import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Text, View } from 'react-native'
import { ErrorScreen, LoadingScreen, Modal } from '../../shared'

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

const ExpenseModal = ({ selectedExpenseId, onClose }) => {
  if (!selectedExpenseId) return null

  const { loading, error, data } = useQuery(GET_EXPENSE_QUERY, {
    variables: { id: selectedExpenseId }
  })

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { expense } = data
  return (
    <Modal visible={!!selectedExpenseId} onClose={onClose}>
      <Text>#{expense.id}</Text>
      <View>
        <Text>Details</Text>
        <Text>Date: {expense.date}</Text>
        {expense.description && <Text>Description: {expense.description}</Text>}
        <Text>Type: {expense.type}</Text>
        <Text>Cost: {expense.cost}</Text>
        <Text>Householder: {expense.householder.name}</Text>
      </View>
    </Modal>
  )
}

export default ExpenseModal
