import { ListItem } from 'native-base';
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
          <Text style={styles.displayName}>{profile.name}, <Text style={styles.displayAge}>{profile.age}</Text></Text>
          <Image style={[styles.profilePicture, {aspectRatio: 1}]} resizeMode='contain' source={profile.picture} />
          <Text style={styles.description}>{profile.desc}</Text>
          {this.props.profile.hiking ? <ListItem style={{border: "none"}}><Text>Hiking</Text></ListItem> : null}
          {this.props.profile.skiing ? <ListItem style={{border: "none"}}><Text>Skiing</Text></ListItem> : null}
          {this.props.profile.snowshoeing ? <ListItem style={{border: "none"}}><Text>Snowshoeing</Text></ListItem> : null}
          {this.props.profile.mountain ? <ListItem style={{border: "none"}}><Text>Mountain Climbing</Text></ListItem> : null}
          {this.props.profile.backpacking ? <ListItem style={{border: "none"}}><Text>Backpacking</Text></ListItem> : null}
          {this.props.profile.camping ? <ListItem style={{border: "none"}}><Text>Camping</Text></ListItem> : null}
          {this.props.profile.bear ? <ListItem style={{border: "none"}}><Text>Bear Dodging</Text></ListItem> : null}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 'auto',
    alignItems: 'center',
    position: 'relative',
    height: '585px',
    draggable: 'true',
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
    draggable: 'true',
  },
  displayName: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: '10px',
  },
  displayAge: {
    fontWeight: 'normal',
  },
  description: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'normal',
    width: '360px',
    padding: '20px',
  }
})

export default ProfileViewComponent