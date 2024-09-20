// import React, { useState } from 'react';

// const Aichatbox = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userMessage = input;
//     setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
//     setInput('');

//     const response = await mockApi(userMessage);
//     setMessages((prev) => [...prev, { text: response, sender: 'ai' }]);
//   };

//   const mockApi = async (message) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`AI Response to: "${message}"`);
//       }, 1000);
//     });
//   };

//   return (
//     <div>
//       <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
//             <strong>{msg.sender}:</strong> {msg.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Aichatbox;
