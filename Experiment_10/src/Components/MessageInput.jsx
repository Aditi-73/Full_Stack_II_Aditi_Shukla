import { useState } from "react";

function MessageInput({ sendMessage, connected }) {
  const [text, setText] = useState("");
  const trimmed = text.trim();

  const submit = () => {
    if (!trimmed) {
      return;
    }

    sendMessage(trimmed);
    setText("");
  };

  return (
    <div className="input-area">
      <input
        value={text}
        placeholder="Share a thought..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
        disabled={!connected}
      />
      <button
        onClick={submit}
        disabled={!connected || !trimmed}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;