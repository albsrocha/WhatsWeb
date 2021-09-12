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
import Message from '../Message/index.js'


export default function ChatWindow() {
  
  let speech = null;

  let speechBrowser = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (speechBrowser !== undefined) {
    speech = new speechBrowser();
  };

  const [emojiOpen, setEmojiOpen] = useState(false);

  const [textInput, setTextInput] = useState("");

  const [textMessage, setTextMessage] = useState([
    {author:'1234' ,body:"Ola como se chama?",time:'19:00'},
    {author:'1234' ,body:"Meu nome é Jussiara!",time:'19:01'},
    {author:'134' ,body:"Ola tudo bem?", time:'20:33'}]);

  const [emojiColor, setEmojiColor] = useState("");

  const [listen, setListen] = useState(false);

  const handleEmojiClick = (event, emoji) => {
    setEmojiColor(emoji.activeSkinTone);
    setTextInput(textInput + emoji.emoji);
    console.log(emoji);
  };

  const handleMic = () => {
    if (speech !== null) {
      speech.onstart = () => {
        setListen(true);
      };

      speech.onend = () => {
        setListen(false);
      };

      speech.onresult = (e) => {
        setTextInput(e.results[0][0].transcript);
      };

      speech.start();
    }
  };

  const handleSend = () => {};

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

      <div className="chatWindow--body">

        {textMessage.map((item,key)=>(
          <Message
           key={key} 
           data={item} />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "30%" : "0%" }}
      >
        <Picker
          pickerStyle={{ width: "100%" }}
          native={true}
          onEmojiClick={handleEmojiClick}
          skinTone={emojiColor}
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--headerbtn">
            <div className="chatWindow--btn">
              <CloseIcon
                onClick={() => {
                  setEmojiOpen(false);
                }}
                style={{
                  width: emojiOpen ? 25 : 0,
                  color: emojiOpen ? "#ff9688" : "#919191",
                }}
              />
            </div>

            <div className="chatWindow--btn">
              <InsertEmoticonIcon
                onClick={() => {
                  setEmojiOpen(true);
                }}
                style={{ color: emojiOpen ? "#009688" : "#919191" }}
              />
            </div>

            <div className="chatWindow--btn">
              <AttachFileIcon />
            </div>
          </div>
        </div>
        <div className="chatWindow--input">
          <input
            className="input--chat"
            type="text"
            placeholder="Digite uma mensagem!"
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
        </div>
        <div className="chatWindow--pos">
          {textInput === "" && (
            <div
              className="chatWindow--headerbtn"
              style={{ color: listen ? "#196" : "#919191" }}
            >
              <MicIcon onClick={handleMic} />
            </div>
          )}

          {textInput !== "" && (
            <div className="chatWindow--headerbtn">
              <SendIcon onClick={handleSend} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
