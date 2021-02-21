class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse = (message) => {
      const lowerCase = message.toLowerCase();
  
      if (
        lowerCase.includes("hang out") ||
        lowerCase.includes("hang")
      ) {
        return this.actionProvider.handleMessageParser();
      }
      return this.actionProvider.handleDefault();
    };
  }
  export default MessageParser;