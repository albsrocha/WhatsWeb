import React from "react";
import "./index.css";

export default function Message({ data, user }) {
  return (
    <div
      className="message--line"
      style={{
        justifyContent: data.author === user.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="message--item"
        style={{
          background: data.author === user.author ? "#DCF8C5" : "#F6f6F6",
        }}
      >
        <div className="message--text">{data.body}</div>
        <div className="message--timedate">{data.time}</div>
      </div>
    </div>
  );
}
