import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import TestComponent from './components/TestComponent';
import Navigation from './components/Navigation';
import ProfileViewComponent from './components/ProfileViewComponent';
import SettingViewComponent from './components/SettingViewComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      profile: false,
      swipe: false,
      chat: false,
      setting: true,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      <Container style={this.styles.container}>
          {this.state.profile ? <ProfileViewComponent active={this.state.profile} style={{height: '585px'}} profile={{
            name: "Billy",
            picture: require('./assets/avatar-placeholder.png'),
            desc: "Hi I'm billy and I like bananas"}}
          /> : null}

          {this.state.setting ? <SettingViewComponent active={this.state.setting} style={{height: '585px'}} setting={{
            name: "Billy",
            picture: require('./assets/avatar-placeholder.png'),
            desc: "Hi I'm billy and I like bananas",
            age: "23",
            gender: "male"}}
          /> : null}
          <Navigation></Navigation>
      </Container>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  });
}

