import React, { FC } from "react"
import './Message.css';
import { RootState } from "../model/state/store";
import { useSelector } from 'react-redux';

export interface MessageProps {
    id: string,
    username: string,
    text: string,
    messageInfo?: MessageInfo,
}

type MessageInfo = {
    dateTime?: Date,
}

export const Message = ({ id, username, text }: MessageProps) => {
    const currentUsername = useSelector((state: RootState) => state.user.name);
    
    return (
        <div className={"Message " + (username == currentUsername ? "Message_mine" : "Message_other") }>
            <p className="UsernameLabel">{username}</p>
            <p className="MessageText">{text}</p>
        </div>
    )
}
