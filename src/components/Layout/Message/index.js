import React from 'react'
import './index.css'

export default function Message({key,data}){
    return (
        <div className="message--line">
            <div className="message--item">
                <div className="message--text">OLAAA</div>
                <div className="message--timedate">19:00</div>
            </div>
        </div>
    )
}