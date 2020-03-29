import { useQuery } from '@apollo/client'
import React from 'react'
import { Text, View } from 'react-native'
import { GET_EXPENSE_QUERY } from '../../../queries'
import { ErrorScreen, LoadingScreen, Modal } from '../../shared'

const ExpenseModal = ({ selectedExpenseId, onClose, ...props }) => {
  const { loading, error, data } = useQuery(GET_EXPENSE_QUERY, {
    variables: { id: selectedExpenseId }
  })

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { expense } = data
  return (
    <Modal visible={!!selectedExpenseId} onClose={onClose} {...props}>
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
