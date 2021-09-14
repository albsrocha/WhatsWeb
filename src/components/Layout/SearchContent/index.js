import "./index.css";

import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { React, useState } from "react";

export default function SearchContent({ Width }) {
  const [newWidth, setNewWidth] = useState(Width);

  return (
    <div
      className="search--content"
      style={{ width: newWidth, overflow: "hidden" }}
    >
      <div className="search--head">
        <div className="search--head--top">
          <CloseIcon
            style={{ margin: "0 40 0 10", color: "#919191", cursor: "pointer" }}
            onClick={() => setNewWidth("0%")}
          />
          Pesquisar mensagens
        </div>
        <div className="search--head--search">
          <div className="search--head--pre--input">
            <SearchIcon
              fontSize="small"
              style={{ color: "#919191", marginLeft: "20px" }}
            />
            <input
              type="search"
              placeholder="Pesquisar"
              className="search--head--input"
              alt="Pesquisar"
            />
          </div>
        </div>
      </div>
      <div className="search--area"> Pesquisar mensagens</div>
    </div>
  );
}
