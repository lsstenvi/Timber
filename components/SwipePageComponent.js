import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ProfileViewComponent from './ProfileViewComponent';

class SwipePageComponent extends React.Component {
  profile_database = [
    {name: "Bob", desc: "hi", picture: require('../assets/avatar-placeholder.png')},
    {name: "Wow a new guy", desc: "I actually like to hike", picture: require('../assets/avatar-placeholder.png')},
    {name: "Emma R", desc: "it's me, from the dad dating game", picture: require('../assets/avatar-placeholder.png')},
  ]

  constructor(props) {
    super(props)
    this.state = {
      profileInView: 0,
    }

    this.setSwipeableRef = element => { this.swipeable = element }
    this.setProfileViewRef = element => { this.profileView = element }
  }

  render() {
    const swipingRightAction = (progress, dragX) => {
      return (
        <Animated.Text style={{color: 'white', backgroundColor: 'green', width:'100%', opacity: progress}}>
          Swipe Right
        </Animated.Text>
      )
    }
    const swipingLeftAction = (progress, dragX) => {
      return (
        <Animated.Text style={{color: 'white', backgroundColor: 'red', width:'100%', opacity: progress}}>
          Swipe Left
        </Animated.Text>
      )
    }

    const swipe = (liked) => {
      if (liked) {
        console.log('Liked a profile!')
      }
      this.swipeable.close()
      this.setState({
        profileInView: (this.state.profileInView + 1) % this.profile_database.length
      })
    }

    return (
      <View style={styles.container}>
        <Swipeable
          ref={this.setSwipeableRef}
          activeOffsetX={[-20, 20]}
          // onSwipeableClose={() => this.setState({profileViewOpacity: 1.0})}
          onSwipeableLeftOpen={() => swipe(true)}
          onSwipeableRightOpen={() => swipe(false)}
          renderLeftActions={swipingRightAction}
          renderRightActions={swipingLeftAction}>
          <ProfileViewComponent
            ref={this.setProfileViewRef}
            profile={this.profile_database[this.state.profileInView]} />
        </Swipeable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default SwipePageComponent