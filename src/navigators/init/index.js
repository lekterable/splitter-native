import React from 'react'
import { LoadingScreen } from '../../components/shared'
import auth from '../../utils/auth'

const Init = ({ navigation }) => {
  auth
    .isAuthenticated()
    .then(isAuthenticated =>
      isAuthenticated ? navigation.navigate('App') : navigation.navigate('Auth')
    )

  return <LoadingScreen />
}

export default Init
