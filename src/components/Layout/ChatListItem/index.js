import './index.css'


export default function ChatListItem({onClick}){
    return(
        <div className="chatListitem" onClick={onClick}>
            <img src="https://www.blexar.com/avatar.png" alt="" className="chatListitemavatar"/>
            <div className="chatListitemlines">
                <div className="chatListitemline">
                    <div className="chatListitemname">Alberto Rocha</div>
                    <div className="chatListitemdate">19:00</div>
                </div>
                <div className="chatListitemline">
                <div className="chatListitemlastmessage">
                   <p> mensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagem
                   mensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagem
                   mensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagem
                   mensagemmensagemmensagemoalmensagemmensagemmensagemmensagem
                   mensagemmensagemmensagem
                   </p>
                    </div>
                </div>
            </div>
        </div>
    )
}