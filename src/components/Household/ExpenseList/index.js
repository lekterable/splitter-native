import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ExpenseList = ({ expenses }) => (
  <View>
    <Text>Expenses: </Text>
    <FlatList
      data={expenses}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, type, cost, householder } }) => (
        <Text
          key={id}
          onPress={() => setSelectedExpenseId(String(id))}
        >{`${householder.name} spent ${cost} on ${type}`}</Text>
      )}
    />
  </View>
)

export default ExpenseList
