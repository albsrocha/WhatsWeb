import React, { useState } from "react";
import "./index.css";

import Picker from "emoji-picker-react";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import IconButton from "@material-ui/core/IconButton";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export default function ChatWindow({ text }) {
  const [emojiOpen, setEmojiOpen] = useState(false);
  
  const handleEmojiClick = (event, ola) => {
    console.log(ola);
  };


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

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "30%" : "0%"}}
      >
        <Picker
          pickerStyle={{ width: "100%" }}
          native={true}
          onEmojiClick={handleEmojiClick}
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--headerbtn">
            <IconButton onClick={()=>{setEmojiOpen(false)}}>
              <CloseIcon />
            </IconButton>

            <IconButton onClick={()=>{setEmojiOpen(true)}}>
              <InsertEmoticonIcon />
            </IconButton>

            <IconButton>
              <AttachFileIcon />
            </IconButton>
          </div>
        </div>
        <div className="chatWindow--input">
          <input
            className="input--chat"
            type="text"
            placeholder="Digite uma mensagem!"
          />
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--headerbtn">
            <IconButton>
              <MicIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
