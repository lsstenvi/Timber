import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ProfileViewComponent from './ProfileViewComponent';

class SwipePage extends Component {

    profile_database = [
        {name: "Bob", desc: "hi", picture: require('../assets/avatar-placeholder.png')},
        {name: "Wow a new guy", desc: "I actually like to hike", picture: require('../assets/avatar-placeholder.png')},
        {name: "Emma R", desc: "it's me, from the dad dating game", picture: require('../assets/avatar-placeholder.png')},
    ]

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      profileInView: 0,
    };
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.setState({
            backgroundColor: 'red',
            profileInView: (this.state.profileInView + 1) % this.profile_database.length
        });
        break;
      case SWIPE_RIGHT:
        this.setState({
            backgroundColor: 'green',
            profileInView: (this.state.profileInView + 1) % this.profile_database.length
        });
        break;
      case SWIPE_UP:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={[{
          backgroundColor: this.state.backgroundColor
        }, styles.container]}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
        <ProfileViewComponent
            profile={this.profile_database[this.state.profileInView]} />
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 'auto',
      alignItems: 'center',
      position: 'relative',
    },
    displayName: {
      fontSize: 36,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      opacity: 0.5
    },
    description: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'normal',
    }
  })

export default SwipePage;