import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import App from './app'
import Auth from './auth'
import Init from './init'

export default createAppContainer(
  createSwitchNavigator(
    {
      Init,
      App,
      Auth
    },
    {
      initialRouteName: 'Init'
    }
  )
)
