import React, {Component} from 'react';
import {Animated, PanResponder, StyleSheet, View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ProfileViewComponent from './ProfileViewComponent';

class SwipePage extends Component {

    profile_database = [
        {name: "Hugh and Lori", age: 69, hiking: true, backpacking: true, bear: true, desc: "Hello all you lovely folks! We're Hugh and Lori, just two old birds looking to enjoy our retirement. Don't let our age fool you- we bet we could outhike some of you youngins! We love backpacking and bear-dodging (we love looking for a bit of excitement in our old age ;-)). Feel free to send us a message, we love making new friends, no matter who!", picture: require('../assets/profile4.png')},
        {name: "Tori", age: 25, mountain: true, camping: true, desc: "hey let's go mountain climbing", picture: require('../assets/profile1.png')},
        {name: "Geoffrey", age: 54, hiking: true, skiing: true, snowshoeing: true, desc: "Hey, my name is Geoffrey, but everyone just calls me Geoff. The wife says I need to get out more, so I'm trying to get into hiking LOL. Looking for some nice folks to show me the ropes, maybe grab a couple brews after.", picture: require('../assets/profile2.png')},
        {name: "Alex", age: 21, skiing: true, backpacking: true, camping: true, desc: "hi, im a chill person looking for friends to go skiing with. im pretty experienced, but im always open to meeting anyone who wants to have fun. hit me up", picture: require('../assets/profile5.png')},
        {name: "Jacob", age: 32, hiking: true, camping: true, bear: true, desc: "I like to explore the woods and camp. Let me know if you're interested!", picture: require('../assets/profile6.png')},
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
            <ProfileViewComponent profile={this.profile_database[this.state.profileInView]} user={this.props.user}/>
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