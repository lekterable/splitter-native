import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import React from 'react'
import { ADD_EXPENSE_QUERY, GET_GROUP_QUERY } from '../../../queries'
import {
  Button,
  Container,
  DatePicker,
  Modal,
  Picker,
  TextInput
} from '../../shared'

const items = [
  { label: 'Food', value: 'FOOD' },
  { label: 'Bills', value: 'BILLS' },
  { label: 'Entertainment', value: 'ENTERTAINMENT' },
  { label: 'Other', value: 'OTHER' }
]

const AddExpenseModal = ({ isAdding, onClose, groupId, ...props }) => {
  const [addExpense] = useMutation(ADD_EXPENSE_QUERY, {
    refetchQueries: [{ query: GET_GROUP_QUERY, variables: { id: groupId } }]
  })

  const handleSubmit = async ({ date, description, type, cost }) => {
    const variables = {
      date,
      description,
      type,
      group: groupId,
      cost: Number(cost)
    }

    await addExpense({ variables })
    onClose()
  }

  return (
    <Modal visible={isAdding} onClose={onClose} {...props}>
      <Formik
        initialValues={{ date: '', description: '', type: '', cost: '' }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Container>
            <DatePicker
              initialValue={values.date}
              onChange={handleChange('date')}
            />
            <TextInput
              value={values.description}
              placeholder="description"
              onChange={handleChange('description')}
              onBlur={handleBlur('description')}
              multiline
            />
            <Picker
              initialValue={values.type}
              placeholder="Select category"
              items={items}
              onChange={handleChange('type')}
            />
            <TextInput
              value={values.cost}
              placeholder="cost"
              onChange={handleChange('cost')}
              onBlur={handleBlur('cost')}
              keyboardType="numeric"
            />
            <Button title="Add Expense" onPress={handleSubmit} />
          </Container>
        )}
      </Formik>
    </Modal>
  )
}

export default AddExpenseModal
