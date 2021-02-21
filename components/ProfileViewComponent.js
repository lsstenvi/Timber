import { ListItem, Icon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

class ProfileViewComponent extends React.Component {
  render() {
    const profile = this.props.profile;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.displayName}>{profile.name}, <Text style={styles.displayAge}>{profile.age}</Text></Text>
          <Image style={[styles.profilePicture, {aspectRatio: 1}]} resizeMode='contain' source={profile.picture} />
          <Text style={styles.description}>{profile.desc}</Text>
          <Text style={styles.subtitle}>Interests</Text>
          {this.props.profile.hiking ? 
            <ListItem style={{border: "none"}}>
              <Text>Hiking</Text>
              {this.props.user.hiking && this.props.user.name != this.props.profile.name ? 
              <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
          {this.props.profile.skiing ? 
            <ListItem style={{border: "none"}}>
              <Text>Skiing</Text>
              {this.props.user.skiing && this.props.user.name != this.props.profile.name ? 
                <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
          {this.props.profile.snowshoeing ? 
            <ListItem style={{border: "none"}}>
              <Text>Snowshoeing</Text>
              {this.props.user.snowshoeing && this.props.user.name != this.props.profile.name ? 
                <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
          {this.props.profile.mountain ? 
            <ListItem style={{border: "none"}}>
              <Text>Mountain Climbing</Text>
              {this.props.user.mountain && this.props.user.name != this.props.profile.name ? 
                <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
            : null}
          {this.props.profile.backpacking ? 
            <ListItem style={{border: "none"}}>
              <Text>Backpacking</Text>
              {this.props.user.backpacking && this.props.user.name != this.props.profile.name ? 
              <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
          {this.props.profile.camping ? 
            <ListItem style={{border: "none"}}>
              <Text>Camping</Text>
              {this.props.user.camping && this.props.user.name != this.props.profile.name ? 
                <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
          {this.props.profile.bear ? 
            <ListItem style={{border: "none"}}>
              <Text>Bear Dodging</Text>
              {this.props.user.bear && this.props.user.name != this.props.profile.name ? 
                <Icon name="checkmark-done-sharp" style={styles.shared}/> : null }
            </ListItem> 
          : null}
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
    paddingVertical: '10px',
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
  }, 
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.25,
    color: 'black',
    paddingBottom: '10px',
    paddingTop: '20px',
    paddingLeft: '20px',
    borderTopColor: "rgb(217, 213, 220)",
    borderTopWidth: "1px",
  },
  shared: {
    paddingLeft: '5px',
    fontSize: '20px'
  },
})

export default ProfileViewComponent