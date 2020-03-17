import { AsyncStorage } from 'react-native'
import { AUTH_KEY } from './constants'

class Auth {
  async token() {
    return await AsyncStorage.getItem(AUTH_KEY)
  }

  async isAuthenticated() {
    return Boolean(await AsyncStorage.getItem(AUTH_KEY))
  }

  async authenticate(token) {
    await AsyncStorage.setItem(AUTH_KEY, token)
  }

  async clear() {
    await AsyncStorage.removeItem(AUTH_KEY)
  }
}

export default new Auth()
