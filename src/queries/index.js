import { gql } from '@apollo/client'

export const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`

export const LOGIN_USER_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export const REGISTER_USER_QUERY = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`

export const GET_HOUSEHOLD_QUERY = gql`
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

export const GET_HOUSEHOLDS_QUERY = gql`
  query Households {
    households {
      id
      name
    }
  }
`

export const GET_EXPENSE_QUERY = gql`
  query Expense($id: String!) {
    expense(id: $id) {
      id
      date
      description
      type
      householder {
        name
      }
      household {
        name
      }
      cost
    }
  }
`

export const ADD_EXPENSE_QUERY = gql`
  mutation AddExpense(
    $date: Date!
    $description: String
    $type: ExpenseType!
    $household: String!
    $cost: Int!
  ) {
    addExpense(
      date: $date
      description: $description
      type: $type
      household: $household
      cost: $cost
    ) {
      id
      date
      description
      type
      cost
    }
  }
`
