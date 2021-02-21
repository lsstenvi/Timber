import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { Item, Input, ListItem, CheckBox, Body } from "native-base";
import Chatbot from 'react-chatbot-kit'
import './App.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './Config';


class ChatViewComponent extends React.Component {
   render(){
    return (
      <div className="Chatbot">
        <header className="Chatbot-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
        </header>
      </div>
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
      paddingHorizontal: '20px',
      height: '320px',
    },
    displayName: {
      fontSize: 36,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
    }

  })
  

export default ChatViewComponent