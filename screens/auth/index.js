import { createStackNavigator } from 'react-navigation'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

export default createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  { initialRouteName: 'SignIn' }
)
