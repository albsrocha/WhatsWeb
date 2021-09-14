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
import Status from "./components/Layout/Status/index.js";
import SearchContent from "./components/Layout/SearchContent/index.js";

function App() {
  const [valueReturn, setValueRetunr] = useState("padrão");
  const [chatlist, setChatlist] = useState([
    {
      chatId: 1,
      author: "Maria",
      avatar: "https://www.blexar.com/avatar.png",
      content:
        "Eu ia desmarcar mas acontece que eu não.fui. Estava muito tarde",
    },
    {
      chatId: 2,
      author: "Ana",
      avatar: "https://www.blexar.com/avatar.png",
      content:
        "Meu Feedback:É uma forma de interação social, podem ter características faladas ou escritas, tamanhos diversificados. Por meio de um objetivo gira em torno de idéias e sentidos, se expressa de forma verbal e não-verbal. ",
    },
    {
      chatId: 3,
      author: "Paulo",
      avatar: "https://www.blexar.com/avatar.png",
      content:
        "Para o trabalho você tem que  produzir um texto grande, quero dizer, de 2.000 palavras ou mais, com postagens de alta qualidade.",
    },
    {
      chatId: 4,
      author: "Giza",
      avatar: "https://www.blexar.com/avatar.png",
      content: "Não liga",
    },
  ]);

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    author: "0005",
    avatar: "https://www.blexar.com/avatar.png",
    name: "Alberto",
  });

  if (valueReturn === "padrão") {
    return (
      <div className="app-window">
        <div className="sidebar">
          <header>
            <img src={user.avatar} alt="avatar" className="avatar-image" />
            <div className="header-buttons">
              <Hidden smDown>
                <IconButton>
                  <DonutLargeIcon
                    onClick={() => setValueRetunr("Status")}
                    className="header-side-icons"
                  />
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
              <ChatListItem
                key={key}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
                data={item}
              />
            ))}
          </div>
        </div>
        <div className="contentarea">
          {activeChat.chatId !== undefined && <ChatWindow user={user} />}
          {activeChat.chatId === undefined && <ChatIntro />}
        </div>
      </div>
    );
  } else {
    return <Status />;
  }
}

export default App;
