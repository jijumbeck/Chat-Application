import { Message, MessageProps } from "./Message"
import './Chat.css';

export interface ChatProps {
    messages: Array<MessageProps>,
}

export const Chat = ({ messages }: ChatProps) => {
    return (
        <div 
            className="MessageContainer"
        >
            {
                messages.map(message => <Message key={message.id} {...message} />)
            }
        </div>
    )
}