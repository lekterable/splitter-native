import { AsyncStorage } from 'react-native'

export const AUTH_KEY = 'auth-token'

export const handleSignIn = token => AsyncStorage.setItem(AUTH_KEY, token)

export const handleSignUp = () => AsyncStorage.setItem(AUTH_KEY, 'true')

export const handleSignOut = () => AsyncStorage.clear()

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(AUTH_KEY)
      .then(res => {
        if (res) return resolve(true)
        return resolve(false)
      })
      .catch(err => reject(err))
  })
}
