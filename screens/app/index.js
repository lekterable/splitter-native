import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import OtherScreen from './OtherScreen'
import ProfileScreen from './ProfileScreen'

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen,
    Profile: ProfileScreen
  },
  { initialRouteName: 'Home' }
)
