import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { TabNavigator } from "react-navigation"

export class ArtistTab extends Component {
  render() {
    return (
      <ArtistList />
    );
  }
}

export class PlaylistTab extends Component {
  render() {
    return (
      <PlayList />
    );
  }
}

export const MainScreenNavigator = TabNavigator({
  Artists: { screen: ArtistTab },
  Playlist: { screen: PlaylistTab }
})
