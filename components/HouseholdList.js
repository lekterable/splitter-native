import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

export default ({ households = [], onPress }) => (
  <View>
    <FlatList
      data={households}
      renderItem={({ item: { id, name }, index }) => (
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#4CB944',
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => onPress(id, name)}
        >
          <Text style={{ fontSize: 18 }}>{`${index + 1}. ${name} `}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={({ id }) => id}
    />
  </View>
)
