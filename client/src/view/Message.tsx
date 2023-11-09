import React, { FC } from "react"
import './Message.css';

export interface MessageProps {
    id: number,
    userId: number,
    text: string,
    messageInfo?: MessageInfo,
}

type MessageInfo = {
    dateTime?: Date,
}

export const Message = ({ text }: MessageProps) => {
    return (
        <div className="Message">
            {text}
        </div>
    )
}
