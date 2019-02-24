import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import OtherScreen from './OtherScreen'

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen
  },
  { initialRouteName: 'Home' }
)
