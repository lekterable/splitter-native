import { gql, useQuery } from '@apollo/client'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'
import { ErrorScreen, LoadingScreen } from '../shared'
import ExpenseList from './ExpenseList'
import ExpenseModal from './ExpenseModal'
import ShareModal from './ShareModal'
import * as Styled from './styled'

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
  const [isSharing, setIsSharing] = useState(false)

  useEffect(() => {
    if (!data) return

    navigation.setParams({ name: data.household.name })
  }, [data])

  const handleExpenseClose = () => setSelectedExpenseId(null)
  const handleShareClose = () => setIsSharing(false)

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error.message} />

  const { household } = data
  return (
    <Styled.Container>
      <Styled.ShareIcon>
        <TouchableOpacity onPress={() => setIsSharing(true)}>
          <Ionicons name="ios-link" size={40} />
        </TouchableOpacity>
      </Styled.ShareIcon>
      <Styled.Household>
        <Text>Owner: {household.owner.name}</Text>
        <ExpenseList expenses={household.expenses} />
        <Button color="#4CB944" title="Add Expense" />
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
    </Styled.Container>
  )
}

export default Household
