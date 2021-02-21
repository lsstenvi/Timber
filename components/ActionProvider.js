
  
// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleMessageParser = () => {
    const messages = this.createChatBotMessage(
      "I would love to hang out with you! I see we share some interests, which one is your absolute favorite?",
      { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("How are you?", {
      withAvatar: true,
    });

    this.addMessageToBotState(message)
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}



export default ActionProvider;