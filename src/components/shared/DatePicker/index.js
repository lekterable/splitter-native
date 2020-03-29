import React, { useState } from 'react'
import { View } from 'react-native'
import DatePickerComponent from 'react-native-modal-datetime-picker'
import TextInput from '../TextInput'

const DatePicker = ({ initialValue, onChange, ...props }) => {
  const [date, setDate] = useState(initialValue)
  const [isVisible, setIsVisible] = useState(false)

  const showDatePicker = () => setIsVisible(true)
  const hideDatePicker = () => setIsVisible(false)
  const handleConfirm = value => {
    setDate(value)
    hideDatePicker()
    onChange(String(value))
  }

  const readableDate =
    date &&
    date.toLocaleString(['en-US'], {
      year: 'numeric',
      day: 'numeric',
      month: 'long'
    })

  return (
    <View>
      <TextInput
        value={readableDate || ''}
        placeholder="date"
        onChange={showDatePicker}
        onFocus={showDatePicker}
        onBlur={hideDatePicker}
      />
      {isVisible && (
        <DatePickerComponent
          date={date || undefined}
          isVisible={isVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          {...props}
        />
      )}
    </View>
  )
}

export default DatePicker
