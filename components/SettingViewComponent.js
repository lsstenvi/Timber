import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import { Item, Input, ListItem, CheckBox, Body, Content, Segment, Button } from "native-base";


class SettingViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checkbox1: props.settings.hiking,
          checkbox2: props.settings.skiing,
          checkbox3: props.settings.snowshoeing,
          checkbox4: props.settings.mountain,
          checkbox5: props.settings.backpacking,
          checkbox6: props.settings.camping,
          checkbox7: props.settings.bear,
        };
      }
      toggleSwitch1() {
        this.setState({
          checkbox1: !this.state.checkbox1
        });
        this.props.userUpdate({hiking: !this.state.checkbox1});
      }
      toggleSwitch2() {
        this.setState({
          checkbox2: !this.state.checkbox2
        });
        this.props.userUpdate({skiing: !this.state.checkbox2});
      }
      toggleSwitch3() {
        this.setState({
          checkbox3: !this.state.checkbox3
        });
        this.props.userUpdate({snowshoeing: !this.state.checkbox3});
      }
      toggleSwitch4() {
        this.setState({
          checkbox4: !this.state.checkbox4
        });
        this.props.userUpdate({mountain: !this.state.checkbox4});
      }
      toggleSwitch5() {
        this.setState({
          checkbox5: !this.state.checkbox5
        });
        this.props.userUpdate({backpacking: !this.state.checkbox5});
      }
      toggleSwitch6() {
        this.setState({
          checkbox6: !this.state.checkbox6
        });
        this.props.userUpdate({camping: !this.state.checkbox6});
      }
      toggleSwitch7() {
        this.setState({
          checkbox7: !this.state.checkbox7
        });
        this.props.userUpdate({bear: !this.state.checkbox7});
      }
    render() {
        const settings = this.props.settings;
        return (
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.displayName}>{settings.name}</Text>
              <Image style={[styles.profilePicture, {aspectRatio: 1}]} resizeMode='contain' source={settings.picture} />
              <Text style={styles.description}>Age</Text>
              <Item>
              <Input placeholder={settings.age} style={styles.input} onChangeText={value => this.props.userUpdate({age: value})}/>
              </Item>
              <Text style={styles.description}>Gender</Text>
              <Item>
              <Input placeholder={settings.gender} style={styles.input} onChangeText={value => this.props.userUpdate({gender: value})}/>
              </Item>

              <Text style={styles.description}>Physical Ability</Text>
              <Segment style={{backgroundColor: 'none', textAlign: 'center', borderRadius: '25%'}}>
          <Button style={{width: '100px', height: '30px',textAlign: 'center', backgroundColor: '#BCE2AE'}}
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text style={{width: '100%'}}>Beginner</Text>
          </Button>
          <Button style={{width: '100px', height: '30px',textAlign: 'center', backgroundColor: '#D4E867'}}
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text style={{width: '100%'}}>Intermediate</Text>
          </Button>
          <Button style={{width: '100px', height: '30px',textAlign: 'center', backgroundColor: '#CE8952'}}
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
            <Text style={{width: '100%'}}>Hardcore</Text>
          </Button>
        </Segment>


              <Text style={styles.description}>Your Favorite Outdoor Activities</Text>
              <ListItem button onPress={() => this.toggleSwitch1()}>
             <CheckBox
               color="#000"
               checked={this.state.checkbox1}
               onPress={() => this.toggleSwitch1()}
             />
             <Body>
               <Text style={styles.checkbox}>Hiking</Text>
             </Body>
              </ListItem>
           <ListItem button onPress={() => this.toggleSwitch2()}>
             <CheckBox
                  color="#000"
                  checked={this.state.checkbox2}
                  onPress={() => this.toggleSwitch2()}
               />
               <Body>
                  <Text style={styles.checkbox}>Skiing</Text>
                </Body>
             </ListItem>
             <ListItem button onPress={() => this.toggleSwitch3()}>
               <CheckBox
                  color="#000"
                  checked={this.state.checkbox3}
                  onPress={() => this.toggleSwitch3()}
             />
               <Body>
               <Text style={styles.checkbox}>Snowshoeing</Text>
              </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch4()}>
                <CheckBox
                  color="#000"
                  checked={this.state.checkbox4}
                  onPress={() => this.toggleSwitch4()}
                />
                <Body>
                  <Text style={styles.checkbox}>Mountain Climbing</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch5()}>
                <CheckBox
                  color="#000"
                  checked={this.state.checkbox5}
                  onPress={() => this.toggleSwitch5()}
                />
                <Body>
                  <Text style={styles.checkbox}>Backpacking</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch6()}>
                <CheckBox
                  color="#000"
                  checked={this.state.checkbox6}
                  onPress={() => this.toggleSwitch6()}
                />
                <Body>
                  <Text style={styles.checkbox}>Camping</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch7()}>
                <CheckBox
                  color="#000"
                  checked={this.state.checkbox7}
                  onPress={() => this.toggleSwitch7()}
                />
                <Body>
                  <Text style={styles.checkbox}>Bear Dodging</Text>
                </Body>
              </ListItem>
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
    height: '320px',
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
  }, 
  input: {
    marginHorizontal: '20px',
    paddingHorizontal: '20px',
  },
  checkbox: {
    paddingLeft: '10px',
  },
})

export default SettingViewComponent
