import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import TestComponent from './components/TestComponent';
import Navigation from './components/Navigation';
import ProfileViewComponent from './components/ProfileViewComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      profile: true,
      swipe: false,
      chat: false,
      settings: false,
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

  updateState (navState) {
    switch (navState) {
      case 1:
        this.setState({
          profile: true,
          swipe: false,
          chat: false,
          settings: false,
        });
        break;
      case 2:
        this.setState({
          profile: false,
          swipe: true,
          chat: false,
          settings: false,
        });
        break;
      case 3:
        this.setState({
          profile: false,
          swipe: false,
          chat: true,
          settings: false,
        });
        break;
      case 1:
        this.setState({
          profile: false,
          swipe: false,
          chat: false,
          settings: true,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Container style={this.styles.container}>
          {this.state.profile ? <ProfileViewComponent active={this.state.profile} style={{height: '585px'}} profile={{
            name: "Billy",
            picture: require('./assets/avatar-placeholder.png'),
            desc: "Hi I'm billy and I like bananas"}}
          /> : null}
          <Navigation updateNav={this.updateState.bind(this)}></Navigation>
      </Container>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 'auto',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  });
}

