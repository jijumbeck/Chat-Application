import { Chat, ChatProps } from "../view/Chat"
import { MessageProps } from "../view/Message"
import { MessageForm } from "../view/MessageForm"
import './ChatPage.css';

export const ChatPage = ({ messages }: ChatProps) => {

    return (
        <div className="ChatPage">
            <Chat messages={messages} />
            <MessageForm formDataSender={(str: string) => console.log(str)} />
        </div>
    )
}