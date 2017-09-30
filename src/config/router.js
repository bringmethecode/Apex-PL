import React from 'react';
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Artists from '../components/Artists'
import Playlist from '../components/Playlist'

export const Tabs = TabNavigator({
  Artists: {
    screen: Artists,
    navigationOptions: {
      tabBarLabel: 'Top Artists',
      tabBarIcon: ({ tintColor }) => <Icon name='heart' type='material-community' color={tintColor} />
    }
  },
  Me: {
    screen: Playlist,
    navigationOptions: {
      tabBarLabel: 'Playlist',
      tabBarIcon: ({ tintColor }) => <Icon name='play-circle-outline' type='material-community' color={tintColor} />
    }
  }
})
