import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import HomeScreen from '../../components/Home'
import HouseholdScreen from '../../components/Household'
import OtherScreen from '../../components/Other'
import ProfileScreen from '../../components/Profile'

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Household: {
      screen: HouseholdScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.name,
        headerTintColor: '#4CB944'
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
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        let iconName
        if (routeName === 'Home') {
          iconName = 'ios-home'
        } else if (routeName === 'Other') {
          iconName = 'ios-search'
        } else if (routeName === 'Profile') {
          iconName = 'ios-person'
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#4CB944',
      inactiveTintColor: '#8AEA92',
      showLabel: false,
      style: { height: 70 }
    }
  }
)
