import React from 'react'
import { SafeAreaView } from 'react-native'
import ProfileFollowerComponent from 'components/ProfileFollower'
import ProfileFollowerServiceComponent from 'components/ProfileFollower/index.service'
import DefaultNavigationComponent from 'components/NavigationPrimary/Default'
import NavigationSecondary from 'components/NavigationSecondary/Default'
import { Translation } from 'react-i18next'
import UserServiceProvider from 'services/providers/User'

class ProfileFollowed extends React.Component {
  static navigationOptions = DefaultNavigationComponent
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Translation>
          {(t) => (
            <NavigationSecondary
              onNavLeftPress={() => this.props.navigation.goBack(null)}
              title={t('Followers')}
            />
          )}
        </Translation>        

        <ProfileFollowerServiceComponent>
          {(props) => (
            <UserServiceProvider>
              {((userProps) => (
                <ProfileFollowerComponent
                  {...props}
                  {...userProps}
                />
              ))}
            </UserServiceProvider>
          )}
        </ProfileFollowerServiceComponent>
      </SafeAreaView>
    )
  }
}

export default ProfileFollowed