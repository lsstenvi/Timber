import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

/** Usage:
<ProfileViewComponent profile={{
  name: "Billy",
  picture: require('./assets/avatar-placeholder.png'),
  desc: "Hi I'm billy and I like bananas"}}/>
 */

class ProfileViewComponent extends React.Component {
  render() {
    const profile = this.props.profile;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.displayName}>{profile.name}</Text>
          <Image style={[styles.profilePicture, {aspectRatio: 1}]} resizeMode='contain' source={profile.picture} />
          <Text style={styles.description}>{profile.desc}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '585px',
  },
  scrollView: {
    width: '100%',
    flex: 'auto',
    height: '585px',
  },
  profilePicture: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    paddingHorizontal: '20px',
    height: '320px',
  },
  displayName: {
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'normal',
  }
})

export default ProfileViewComponent