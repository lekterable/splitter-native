import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import HouseholdScreen from './HouseholdScreen'
import OtherScreen from './OtherScreen'
import ProfileScreen from './ProfileScreen'

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Household: {
      screen: HouseholdScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.name
      })
    }
  },
  { initialRouteName: 'Home' }
)

export default createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Other: OtherScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home'
  }
)
