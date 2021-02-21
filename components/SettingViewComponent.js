import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { Item, Input, ListItem, CheckBox, Body } from "native-base";


class SettingViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checkbox1: true,
          checkbox2: true,
          checkbox3: true,
          checkbox4: false,
          checkbox5: false,
          checkbox6: false,
          checkbox7: true,
        };
      }
      toggleSwitch1() {
        this.setState({
          checkbox1: !this.state.checkbox1
        });
      }
      toggleSwitch2() {
        this.setState({
          checkbox2: !this.state.checkbox2
        });
      }
      toggleSwitch3() {
        this.setState({
          checkbox3: !this.state.checkbox3
        });
      }
      toggleSwitch4() {
        this.setState({
          checkbox4: !this.state.checkbox4
        });
      }
      toggleSwitch5() {
        this.setState({
          checkbox5: !this.state.checkbox5
        });
      }
      toggleSwitch6() {
        this.setState({
          checkbox6: !this.state.checkbox6
        });
      }
      toggleSwitch7() {
        this.setState({
          checkbox7: !this.state.checkbox7
        });
      }
    render() {
        const setting = this.props.setting;
        return (
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.displayName}>{setting.name}</Text>
              <Image style={[styles.profilePicture, {aspectRatio: 1}]} resizeMode='contain' source={setting.picture} />
              <Text style={styles.description}>Age</Text>
              <Item>
              <Input placeholder={setting.age} />
              </Item>
              <Text style={styles.description}>Gender</Text>
              <Item>
              <Input placeholder={setting.gender} />
              </Item>
              <ListItem button onPress={() => this.toggleSwitch1()}>
             <CheckBox
               color="#000"
               checked={this.state.checkbox1}
               onPress={() => this.toggleSwitch1()}
             />
             <Body>
               <Text>Hiking</Text>
             </Body>
              </ListItem>
           <ListItem button onPress={() => this.toggleSwitch2()}>
             <CheckBox
               color="#000"
               checked={this.state.checkbox2}
                  onPress={() => this.toggleSwitch2()}
               />
               <Body>
                  <Text>Skiing</Text>
                </Body>
             </ListItem>
             <ListItem button onPress={() => this.toggleSwitch3()}>
               <CheckBox
                  color="#000"
               checked={this.state.checkbox3}
                onPress={() => this.toggleSwitch3()}
             />
               <Body>
               <Text>Snowshoeing</Text>
              </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch4()}>
                <CheckBox
               color="#000"
               checked={this.state.checkbox4}
                  onPress={() => this.toggleSwitch4()}
                />
                <Body>
                  <Text>Mountain Climbing</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch5()}>
                <CheckBox
               color="#000"
               checked={this.state.checkbox5}
                  onPress={() => this.toggleSwitch5()}
                />
                <Body>
                  <Text>Backpacking</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch6()}>
                <CheckBox
               color="#000"
               checked={this.state.checkbox6}
                  onPress={() => this.toggleSwitch6()}
                />
                <Body>
                  <Text>Camping</Text>
                </Body>
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch7()}>
                <CheckBox
               color="#000"
               checked={this.state.checkbox7}
                  onPress={() => this.toggleSwitch7()}
                />
                <Body>
                  <Text>Bear Dodging</Text>
                </Body>
              </ListItem>
            </ScrollView>
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
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  profilePicture: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    height: undefined,
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

export default SettingViewComponent
