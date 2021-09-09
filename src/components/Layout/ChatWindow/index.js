import React from "react";
import "./index.css";

import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import IconButton from "@material-ui/core/IconButton";

export default function ChatWindow({ text }) {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://www.blexar.com/avatar.png"
            alt="teste"
          />
          <div className="chatWindow--userinfo">Alberto</div>
        </div>

        <div className="chatWindow--headerbtn">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatWindow--body">{text}</div>

      <div className="chatWindow--footer"></div>
    </div>
  );
}
