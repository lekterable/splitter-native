import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../../components/SignIn'
import SignUpScreen from '../../components/SignUp'

export default createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  { initialRouteName: 'SignIn' }
)
