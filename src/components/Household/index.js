import { useQuery } from '@apollo/client'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GET_HOUSEHOLD_QUERY } from '../../queries'
import { Container, ErrorScreen, LoadingScreen } from '../shared'
import AddExpenseModal from './AddExpenseModal'
import ExpenseList from './ExpenseList'
import ExpenseModal from './ExpenseModal'
import ShareModal from './ShareModal'
import * as Styled from './styled'

const Household = ({ navigation }) => {
  const householdId = navigation.getParam('id')
  const { loading, error, data } = useQuery(GET_HOUSEHOLD_QUERY, {
    variables: { id: householdId }
  })
  const [selectedExpenseId, setSelectedExpenseId] = useState(null)
  const [isSharing, setIsSharing] = useState(false)
  const [isAddingExpense, setIsAddingExpense] = useState(false)

  useEffect(() => {
    if (!data) return

    navigation.setParams({ name: data.household.name })
  }, [data])

  const handleExpensePress = id => setSelectedExpenseId(String(id))
  const handleExpenseClose = () => setSelectedExpenseId(null)
  const handleAddExpensePress = () => setIsAddingExpense(true)
  const handleAddExpenseClose = () => setIsAddingExpense(false)
  const handleSharePress = () => setIsSharing(true)
  const handleShareClose = () => setIsSharing(false)

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { household } = data
  return (
    <Container>
      <Styled.ShareIcon>
        <TouchableOpacity onPress={handleSharePress}>
          <Ionicons name="ios-link" size={30} />
        </TouchableOpacity>
      </Styled.ShareIcon>
      <Styled.Household>
        <Text>Owner: {household.owner.name}</Text>
        <ExpenseList
          expenses={household.expenses}
          onPress={handleExpensePress}
        />
        <TouchableOpacity onPress={handleAddExpensePress}>
          <Ionicons name="ios-add-circle-outline" size={40} />
        </TouchableOpacity>
      </Styled.Household>
      <ShareModal
        isSharing={isSharing}
        code={household.id}
        onClose={handleShareClose}
      />
      <ExpenseModal
        selectedExpenseId={selectedExpenseId}
        onClose={handleExpenseClose}
      />
      <AddExpenseModal
        householdId={householdId}
        isAdding={isAddingExpense}
        onClose={handleAddExpenseClose}
      />
    </Container>
  )
}

export default Household
