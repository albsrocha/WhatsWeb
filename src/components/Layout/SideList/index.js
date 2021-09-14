import "./index.css";

export default function ChatListItem({ onClick, active, data }) {
  return (
    <div className={`chatListitem ${active ? "active" : ""}`} onClick={onClick}>
      <img
        src="https://www.blexar.com/avatar.png"
        alt=""
        className="chatListitemavatar"
      />
      <div className="chatListitemlines">
        <div className="chatListitemline">
          <div className="chatListitemname">{data.author}</div>
          <div className="chatListitemdate">16:00</div>
        </div>
        <div className="chatListitemline">
          <div className="chatListitemlastmessage">
            <p>Última mensagem!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
