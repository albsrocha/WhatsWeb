import React from 'react'
import './index.css'

export default function Message({key,data}){
    return (
        <div className="message--line"
        style={{
            justifyContent:'flex-end'
        }}>
            <div className="message--item">
                <div className="message--text">{data.body}</div>
                <div className="message--timedate">{data.time}</div>
            </div>
        </div>
    )
}