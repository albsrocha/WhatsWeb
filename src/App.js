import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";
import "./App.css";
import ChatListItem from "./components/Layout/SideList/index.js";
import ChatIntro from "./components/Layout/Intro/index.js";
import ChatWindow from "./components/Layout/Chat/index.js";

function App() {
  const [chatlist, setChatlist] = useState([
    {chatId:1, title: 'Fulano de Tal', avatar:'https://www.blexar.com/avatar.png'},
    {chatId:2, title: 'Maria de Tal', avatar:'https://www.blexar.com/avatar.png' },
    {chatId:3, title: 'Ciclano de Tal', avatar:'https://www.blexar.com/avatar.png'},
    {chatId:4, title: 'Enzo de Tal', avatar:'https://www.blexar.com/avatar.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar7_big@2x.png"
            alt="avatar"
            className="avatar-image"
          />
          <div className="header-buttons">
            <Hidden smDown>
              <IconButton>
                <DonutLargeIcon className="header-side-icons" />
              </IconButton>
              <IconButton>
                <ChatIcon className="header-side-icons" />
              </IconButton>
              <IconButton>
                <MoreVertIcon className="header-side-icons" />
              </IconButton>
            </Hidden>
          </div>
        </header>
        <div className="search">
          <div className="searchinside">
            <SearchIcon fontSize="small" className="header-side-icons" />
            <input
              type="search"
              className="search-input"
              placeholder="Pesquisar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem key={key}
            active= {activeChat.chatId === chatlist[key].chatId}
            onClick = {()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow/>}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
