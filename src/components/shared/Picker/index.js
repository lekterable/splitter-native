import React, { useState } from 'react'
import PickerComponent from 'react-native-picker-select'

const Picker = ({
  initialValue,
  placeholder = '',
  items,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = value => setValue(value)
  const onDone = value => onChange(value)

  return (
    <PickerComponent
      value={value}
      placeholder={{ label: placeholder, value: null }}
      onValueChange={handleChange}
      onDonePress={() => onDone(value)}
      items={items}
      {...props}
    />
  )
}

export default Picker
