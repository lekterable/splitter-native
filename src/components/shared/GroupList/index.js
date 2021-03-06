import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

const GroupList = ({ groups = [], onPress }) => (
  <View>
    <FlatList
      data={groups}
      renderItem={({ item: { id, name }, index }) => (
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#4CB944',
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => onPress(id)}
        >
          <Text style={{ fontSize: 18 }}>{`${index + 1}. ${name} `}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={({ id }) => id}
    />
  </View>
)

export default GroupList
