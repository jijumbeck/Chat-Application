import React from 'react';
import { ChatPage } from './presenter/ChatPage';

const messages = [
  { id: 1, userId: 0, text: 'firstMessage' },
  { id: 2, userId: 1, text: 'second' },
  { id: 3, userId: 2, text: '3' },
  { id: 4, userId: 0, text: '4' },
  { id: 5, userId: 1, text: 'five' },
  { id: 6, userId: 2, text: 'six' },
  { id: 7, userId: 0, text: 'sevensevensevensevensevenseven' }
]

function App() {
  return (
    <div className="App">
      <ChatPage messages={messages} />
    </div>
  );
}

export default App;
