// ActionProvider.js

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend. 😊 How can I assist you with your blog articles?");
      this.updateChatbotState(greetingMessage);
    }
  
    handleBlogInquiry() {
      const blogMessage = this.createChatBotMessage("Sure, I can help you with blog articles. 📝 You can ask me about the latest articles, popular topics, or any specific article you're looking for.");
      this.updateChatbotState(blogMessage);
    }
  
    handleLatestArticles() {
      const latestArticlesMessage = this.createChatBotMessage("The latest articles are about technology trends, health tips, and travel guides. 🌍 Do you want more details on any of these?");
      this.updateChatbotState(latestArticlesMessage);
    }
  
    handlePopularArticles() {
      const popularArticlesMessage = this.createChatBotMessage("The most popular articles currently are about personal development, finance management, and cooking recipes. 🍲 Would you like to know more?");
      this.updateChatbotState(popularArticlesMessage);
    }
  
    handleUnknown() {
      const unknownMessage = this.createChatBotMessage("I'm not sure how to help with that. 🤔 Could you please rephrase your question or ask something related to blog articles?");
      this.updateChatbotState(unknownMessage);
    }
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider;
  