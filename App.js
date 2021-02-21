import React from 'react';
import Chatbot from 'react-chatbot-kit'
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import TestComponent from './components/TestComponent';
import Navigation from './components/Navigation';
import ProfileViewComponent from './components/ProfileViewComponent';
import SwipePageComponent from './components/SwipePageComponent';
import SwipePage from './components/SwipePage';
import SettingViewComponent from './components/SettingViewComponent';
import ChatViewComponent from './components/ChatViewComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      profile: true,
      swipe: false,
      chat: false,
      settings: false,
      name: "Billy",
      picture: require('./assets/profile3.png'),
      desc: "Hi I'm Billy, and I am here to party!",
      age: 23,
      gender: "Man",
      hiking: true,
      skiing: true,
      snowshoeing: true,
      mountain: false,
      backpacking: false,
      camping: false,
      bear: true,
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
      case 4:
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
          {this.state.profile ? <ProfileViewComponent style={{height: '585px'}} profile={{
            name: this.state.name,
            picture: this.state.picture,
            desc: this.state.desc,
            age: this.state.age,
            hiking: this.state.hiking,
            skiing: this.state.skiing,
            snowshoeing: this.state.snowshoeing,
            mountain: this.state.mountain,
            backpacking: this.state.backpacking,
            camping: this.state.camping,
            bear: this.state.bear,
          }}
          /> : null}
          {this.state.swipe ? <SwipePage></SwipePage> : null}

          {this.state.chat ? <ChatViewComponent style={{height: '585px'}}/> : null}

          {this.state.settings ? <SettingViewComponent style={{height: '585px'}} settings={{
            name: this.state.name,
            picture: this.state.picture,
            desc: this.state.desc,
            age: this.state.age,
            gender: this.state.gender,
            hiking: this.state.hiking,
            skiing: this.state.skiing,
            snowshoeing: this.state.snowshoeing,
            mountain: this.state.mountain,
            backpacking: this.state.backpacking,
            camping: this.state.camping,
            bear: this.state.bear,
          }}
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

