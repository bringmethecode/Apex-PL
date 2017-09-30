import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Tabs } from './config/router';
//import AlbumList from './components/AlbumList'
//import About from './screens/About'

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  static navigationOptions = {
    title: 'Apex PL',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Tabs />
    )
  }
}

const app = StackNavigator({
  Main: { screen: App },
})

AppRegistry.registerComponent('apexpl', () => app)
