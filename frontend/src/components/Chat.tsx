import { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";

const ChatApp = () => {
  const [message, setMessage] = useState<string>("");
  const { messages, sendMessage } = useWebSocket("http://localhost:1337");

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);

      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white p-4 rounded shadow-md">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-100 text-black self-start"
              }`}
              style={{ maxWidth: "80%" }}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-l-md"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
