// Define patterns and responses for the chatbot
const patterns = [
  { pattern: /hello|hi|hey/i, response: ['Hello!', 'Hi there!', 'Hey!'] },
  { pattern: /how are you/i, response: ['I am good, thank you!', 'I\'m doing fine, how about you?'] },
  { pattern: /what is your name/i, response: ['I am a chatbot.', 'My name is ChatGPT.'] },
  { pattern: /quit|bye/i, response: ['Goodbye!', 'Bye, take care!'] }
];

// Function to generate a random response from an array of responses
function getRandomResponse(responses) {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

// Function to handle user input and generate responses
function chatbotResponse(input) {
  for (const pair of patterns) {
    if (input.match(pair.pattern)) {
      return getRandomResponse(pair.response);
    }
  }
  return "I'm sorry, I didn't understand that.";
}

// Function to start the chat
function startChat() {
  console.log("ChatGPT: Hello! How can I assist you today?");
  while (true) {
    const userInput = prompt("You: ");
    if (userInput.toLowerCase() === 'quit') {
      console.log("ChatGPT: Goodbye! Have a great day!");
      break;
    }
    const response = chatbotResponse(userInput);
    console.log("ChatGPT:", response);
  }
}

// Start the chat
startChat();
