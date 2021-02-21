import React, {Component} from 'react';
import {Animated, PanResponder, StyleSheet, View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ProfileViewComponent from './ProfileViewComponent';

class SwipePage extends Component {

    profile_database = [
        {name: "Bob", desc: "hi", picture: require('../assets/avatar-placeholder.png')},
        {name: "Wow a new guy", desc: "I actually like to hike", picture: require('../assets/avatar-placeholder.png')},
        {name: "Emma R", desc: "it's me, from the dad dating game", picture: require('../assets/avatar-placeholder.png')},
    ];

    timer = null;

    pan = new Animated.ValueXY();

    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt, gestureState) => {

            this.timer = setTimeout(() => {
                this.setState({canMove: true});
            }, 100);

        },
        onPanResponderMove: Animated.event([
            null, { dx: this.pan.x, dy: this.pan.y }], {listener: () => {
                if (this.pan.x._value > 180 && this.state.canMove) {
                    console.log('right');
                    this.onMoveShouldSetPanResponder;
                    this.onSwipe('SWIPE_RIGHT', null);
                    clearTimeout(this.timer); 
                    this.setState({canMove: false});
                }
                else if (this.pan.x._value < -180 && this.state.canMove) {
                    this.onSwipe('SWIPE_LEFT', null);
                    clearTimeout(this.timer); 
                    this.setState({canMove: false});
                }
            }}),
        onPanResponderRelease: () => {
            Animated.spring(this.pan, { toValue: { x: 0, y: 0 } }).start();
            clearTimeout(self.timer); 
            this.setState({canMove: false});
        }
    });

  constructor(props) {
    super(props);
    this.state = {
      gestureName: 'none',
      backgroundColor: '#fff',
      profileInView: 0,
      canMove: true,
    };
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.setState({
            profileInView: (this.state.profileInView + 1) % this.profile_database.length
        });
        break;
      case SWIPE_RIGHT:
        this.setState({
            profileInView: (this.state.profileInView + 1) % this.profile_database.length
        });
        break;
      case SWIPE_UP:
        break;
      case SWIPE_DOWN:
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
    <View style={styles.container}>
        <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            config={config}
            style={styles.container}
            >
        </GestureRecognizer>
        <Animated.View style={{
            backgroundColor: this.state.backgroundColor, 
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
            }} {...this.panResponder.panHandlers} 
        >
            <ProfileViewComponent profile={this.profile_database[this.state.profileInView]} />
      </Animated.View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 'auto',
      alignItems: 'center',
      position: 'relative',
      draggable: 'true',
    },
  })

export default SwipePage;