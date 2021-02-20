import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Input,
  Item,
  Form
} from "native-base";
import TestComponent from './TestComponent';

class SettingViewComponent extends React.Component {

    render(){
        const settingInfo = this.props.settingInfo;
        
        return(
            <View>
                <ScrollView>
                    <Text>
                        {settingInfo.name}
                    </Text>
                    <Text>
                        Age
                    </Text>
                    <Form>
                        <Item>
                         <Input placeholder="Regular Textbox" />
                        </Item>
                    </Form>
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
