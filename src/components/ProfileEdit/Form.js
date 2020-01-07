import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
} from 'react-native'
import TextField from 'components/Formik/TextField'
import DefaultButton from 'components/Formik/Button/DefaultButton'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'


import { withTheme } from 'react-native-paper'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next'

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3)
    .max(50)
    .matches(/^\S*$/, 'no whitespace')
    .trim()
    .required(),
  fullname: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  email: Yup.string().nullable(),
  phoneNumber: Yup.string().nullable(),
  privacyStatus: Yup.string().nullable(),
})

const ProfileEditForm = ({
  theme,
  handleSubmit,
  loading,
}) => {
  const styling = styles(theme)
  const { t } = useTranslation()

  return (
    <View style={styling.root}>
      <View style={styling.input}>
        <Field name="email" component={TextField} placeholder={t('Email')} disabled autoCompleteType="email" />
      </View>
      <View style={styling.input}>
        <Field name="username" component={TextField} placeholder={t('Username')} disabled autoCompleteType="username" />
      </View>
      <View style={styling.input}>
        <Field name="fullName" component={TextField} placeholder={t('Full Name')} autoCompleteType="name" />
      </View>
      <View style={styling.input}>
        <Field name="bio" component={TextField} placeholder={t('Bio')} />
      </View>
      <View style={styling.input}>
        <Field name="phoneNumber" component={TextField} placeholder={t('Phone Number')} keyboardType="phone-pad" autoCompleteType="tel" />
      </View>
      <View style={styling.input}>
        <DefaultButton label={t('Update')} onPress={handleSubmit} loading={loading} />
      </View>
    </View>
  )
}

const styles = theme => StyleSheet.create({
  root: {
  },
  input: {
    marginBottom: 12,
  },
})

ProfileEditForm.propTypes = {
  theme: PropTypes.any,
  handleSubmit: PropTypes.any,
  submitErrors: PropTypes.any,
  dirtySinceLastSubmit: PropTypes.any,
  usersEditProfile: PropTypes.any,
  values: PropTypes.any,
}

export default withTheme(({
  usersEditProfile,
  usersEditProfileRequest,
  initialValues,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={formSchema}
    onSubmit={usersEditProfileRequest}
  >
    {(formikProps) => (
      <ProfileEditForm
        {...formikProps}
        {...props}
        loading={usersEditProfile.status === 'loading'}
      />
    )}
  </Formik>
))
