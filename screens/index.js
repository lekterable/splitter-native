import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import App from './app'
import Auth from './auth'
import InitScreen from './InitScreen'

export default createAppContainer(
  createSwitchNavigator(
    {
      InitScreen,
      App,
      Auth
    },
    {
      initialRouteName: 'InitScreen'
    }
  )
)
