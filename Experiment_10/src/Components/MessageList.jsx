function MessageList({ messages }) {
  const getSenderTheme = (senderName = "Unknown") => {
    let hash = 0;

    for (let i = 0; i < senderName.length; i += 1) {
      hash = senderName.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash) % 360;

    return {
      bubbleStyle: {
        backgroundColor: `hsl(${hue}, 58%, 91%)`,
        borderColor: `hsl(${hue}, 46%, 70%)`,
      },
      senderStyle: {
        color: `hsl(${hue}, 50%, 35%)`,
      },
    };
  };

  return (
    <div className="messages">
      {messages.length === 0 && (
        <div className="message-empty">No messages yet. Say hello to the camp.</div>
      )}
      {messages.map((msg, i) => {
        const senderName = msg.sender || "Unknown";
        const isSystemMessage = msg.type === "JOIN" || senderName === "System";

        if (isSystemMessage) {
          return (
            <div key={i} className="message system-message">
              <span className="content">{msg.content}</span>
            </div>
          );
        }

        const { bubbleStyle, senderStyle } = getSenderTheme(senderName);

        return (
          <div key={i} className="message" style={bubbleStyle}>
            <span className="sender" style={senderStyle}>
              {senderName}
            </span>
            <span className="content">{msg.content}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;