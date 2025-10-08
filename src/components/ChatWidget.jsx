import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = async () => {
    if (!userQuery.trim()) return;

    const userMessage = { sender: "user", text: userQuery };
    setChatLog([...chatLog, userMessage]);
    setIsLoading(true);
    setUserQuery("");

    try {
      const response = await fetch("https://5c7a-103-175-177-17.ngrok-free.app/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_query: userQuery,
          user_type: "Linux", // You can make this dynamic
        }),
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.response };
      setChatLog((prev) => [...prev, botMessage]);
      
    } catch (error) {
      setChatLog((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
      
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isOpen ? (
        <div style={{
          width: "500px",
          height: "600px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
            background: "#007bff",
            color: "white",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}>
            Chatbot
            <button onClick={() => setIsOpen(false)} style={{ color: "white", border: "none", background: "transparent" }}>✖</button>
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {chatLog.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
                <span style={{
                  background: msg.sender === "user" ? "#dcf8c6" : "#f1f0f0",
                  padding: "6px 10px",
                  borderRadius: "10px",
                  display: "inline-block",
                  maxWidth: "80%"
                }}>{msg.text}</span>
              </div>
            ))}
            {isLoading && <div>🤖 Typing...</div>}
          </div>
          <div style={{ padding: "10px", borderTop: "1px solid #ddd" }}>
            <input
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Type your query..."
              style={{ width: "75%", padding: "6px" }}
              onKeyDown={(e) => e.key === "Enter" && sendQuery()}
            />
            <button onClick={sendQuery} style={{
              width: "22%", marginLeft: "3%",
              background: "#007bff", color: "white", border: "none", padding: "6px", borderRadius: "5px"
            }}>Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "#007bff",
            color: "white",
            padding: "12px 16px",
            borderRadius: "50%",
            border: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            fontSize: "18px",
          }}
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
