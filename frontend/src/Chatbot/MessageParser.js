// MessageParser.js

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("blog")) {
        this.actionProvider.handleBlogInquiry();
      } else if (lowerCaseMessage.includes("latest")) {
        this.actionProvider.handleLatestArticles();
      } else if (lowerCaseMessage.includes("popular")) {
        this.actionProvider.handlePopularArticles();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  