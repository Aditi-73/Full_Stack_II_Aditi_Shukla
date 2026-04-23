import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const clientRef = useRef(null);
  const joinedNameRef = useRef("");

  const loadHistory = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/messages");

      if (!response.ok) {
        return;
      }

      const history = await response.json();
      setMessages(Array.isArray(history) ? history : []);
    } catch (error) {
      console.error("Failed to load chat history", error);
    }
  };

  const announceJoin = () => {
    const cleanName = username.trim();

    if (!connected || !cleanName || joinedNameRef.current === cleanName) {
      return;
    }

    if (clientRef.current && clientRef.current.connected) {
      clientRef.current.publish({
        destination: "/app/join",
        body: JSON.stringify({
          sender: cleanName,
        }),
      });
      joinedNameRef.current = cleanName;
    }
  };

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("Connected ✅");
        setConnected(true);
        loadHistory();

        client.subscribe("/topic/messages", (msg) => {
          const data = JSON.parse(msg.body);

          setMessages((prev) => [...prev, data]);
        });
      },

      onDisconnect: () => {
        console.log("Disconnected");
        setConnected(false);
        joinedNameRef.current = "";
      },

      onStompError: (frame) => {
        console.error("STOMP error:", frame);
        setConnected(false);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      setConnected(false);
      joinedNameRef.current = "";
      client.deactivate();
    };
  }, []);

  const sendMessage = (text) => {
    const cleanName = username.trim();

    if (!cleanName) {
      alert("Enter username first");
      return;
    }

    if (!connected) {
      alert("Not connected to server");
      return;
    }

    if (clientRef.current && clientRef.current.connected) {
      clientRef.current.publish({
        destination: "/app/chat",
        body: JSON.stringify({
          sender: cleanName,
          content: text,
          type: "CHAT",
        }),
      });
    }
  };

  const clearChat = () => {
    if (!connected) {
      return;
    }

    if (!window.confirm("Clear chat only for you?")) {
      return;
    }

    setMessages([]);
  };

  return (
    <div className="chat-box">
      <label className="input-label" htmlFor="username">
        Your Name
      </label>
      <input
        id="username"
        className="username"
        placeholder="Wanderer"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={announceJoin}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            announceJoin();
          }
        }}
      />

      <div className={`status-pill ${connected ? "online" : "offline"}`}>
        <span className="status-dot" />
        {connected ? "Connected" : "Waiting for backend"}
      </div>

      <div className="chat-toolbar">
        <button className="clear-btn" onClick={clearChat} disabled={!connected}>
          Clear Chat
        </button>
      </div>

      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} connected={connected} />
    </div>
  );
}

export default Chat;