import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { Item, Input, ListItem, CheckBox, Body } from "native-base";
import Chatbot from 'react-chatbot-kit'
//import './App.css';
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

export default ChatViewComponent