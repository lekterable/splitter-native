import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ExpenseList = ({ expenses, onPress }) => (
  <View>
    <Text>Expenses: </Text>
    <FlatList
      data={expenses}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, type, cost, member } }) => (
        <Text
          key={id}
          onPress={() => onPress(id)}
        >{`${member.name} spent ${cost} on ${type}`}</Text>
      )}
    />
  </View>
)

export default ExpenseList
