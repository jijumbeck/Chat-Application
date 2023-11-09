import { Message, MessageProps } from "./Message"

export interface ChatProps {
    messages: Array<MessageProps>,
}

export const Chat = ({ messages }: ChatProps) => {
    return (
        <div 
            className="message_container"
        >
            {
                messages.map(message => <Message {...message} />)
            }
        </div>
    )
}