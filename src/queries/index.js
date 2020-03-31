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

export const GET_GROUP_QUERY = gql`
  query Group($id: String!) {
    group(id: $id) {
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
        member {
          name
        }
      }
      members {
        id
        name
      }
    }
  }
`

export const GET_GROUPS_QUERY = gql`
  query Groups {
    groups {
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
      member {
        name
      }
      group {
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
    $group: String!
    $cost: Int!
  ) {
    addExpense(
      date: $date
      description: $description
      type: $type
      group: $group
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
