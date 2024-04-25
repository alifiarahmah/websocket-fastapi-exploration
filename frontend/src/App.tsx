import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const ws = new WebSocket('ws://localhost:8000/ws');

  ws.onmessage = (e) => {
    setMessages([...messages, e.data]);
  };

  const sendMessage = () => {
    if (ws.readyState === ws.OPEN) {
      ws.send(input);
      setInput('');
    } else if (ws.readyState === ws.CONNECTING) {
      setTimeout(() => {
        sendMessage();
      }, 500);
    }
  };

  return (
    <>
      <div>Websocket test</div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>

      <ul id="messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
