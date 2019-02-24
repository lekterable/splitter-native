import { AsyncStorage } from 'react-native'

export const USER_KEY = 'auth-token'

export const handleSignIn = () => AsyncStorage.setItem(USER_KEY, 'true')

export const handleSignUp = () => AsyncStorage.setItem(USER_KEY, 'true')

export const handleSignOut = () => AsyncStorage.clear()

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res) return resolve(true)
        return resolve(false)
      })
      .catch(err => reject(err))
  })
}
