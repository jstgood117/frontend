import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { withTheme } from 'react-native-paper'

import * as navigationOptions from 'navigation/options'

import AuthScreen from 'screens/AuthScreen'
import AuthForgotScreen from 'screens/AuthForgotScreen'
import AuthForgotConfirmScreen from 'screens/AuthForgotConfirmScreen'
import AuthSignupScreen from 'screens/AuthSignupScreen'
import AuthSignupConfirmScreen from 'screens/AuthSignupConfirmScreen'
import OnboardNameScreen from 'screens/OnboardNameScreen'
import OnboardPhotoScreen from 'screens/OnboardPhotoScreen'
import CameraScreen from 'screens/CameraScreen'

const AuthNavigator = ({ theme }) => {
  const Stack = createStackNavigator()

  const stackScreenBlankProps = navigationOptions.stackScreenBlankProps({ theme })
  const stackNavigatorDefaultProps = navigationOptions.stackNavigatorDefaultProps({ theme })
  const stackScreenAuthProps = navigationOptions.stackScreenAuthProps({ theme })

  return (
    <Stack.Navigator {...stackNavigatorDefaultProps}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        {...stackScreenAuthProps}
      />

      <Stack.Screen
        name="AuthForgot"
        component={AuthForgotScreen}
        {...stackScreenAuthProps}
      />

      <Stack.Screen
        name="AuthForgotConfirm"
        component={AuthForgotConfirmScreen}
        {...stackScreenAuthProps}
      />

      <Stack.Screen
        name="AuthSignup"
        component={AuthSignupScreen}
        {...stackScreenAuthProps}
      />

      <Stack.Screen
        name="AuthSignupConfirm"
        component={AuthSignupConfirmScreen}
        {...stackScreenAuthProps}
      />

      <Stack.Screen
        name="OnboardName"
        component={OnboardNameScreen}
        {...stackScreenBlankProps}
      />

      <Stack.Screen
        name="OnboardPhoto"
        component={OnboardPhotoScreen}
        {...stackScreenBlankProps}
      />

      <Stack.Screen
        name="OnboardCamera"
        component={CameraScreen}
        {...stackScreenBlankProps}
      />
    </Stack.Navigator>
  )
}

export default withTheme(AuthNavigator)