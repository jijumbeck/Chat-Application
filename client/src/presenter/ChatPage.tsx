import { SOCKET_PATH } from "../model/network/constants";
import { useChatSocket } from "../model/network/useChatSocket";
import { RootState, useAppDispatch } from "../model/state/store";
import { Chat, ChatProps } from "../view/Chat"
import { MessageProps } from "../view/Message"
import { MessageForm } from "../view/MessageForm"
import './ChatPage.css';
import { useSelector } from "react-redux";

export const ChatPage = () => {
    const dispatch = useAppDispatch();
    const { sendMessage, sendNewName } = useChatSocket(SOCKET_PATH, dispatch);

    const messages = useSelector((state: RootState) =>
        state.chat.messages.map(
            message => message as MessageProps
        ));
    const userId = useSelector((state: RootState) => state.user.id);
    const username = useSelector((state: RootState) => state.user.name);

    return (
        <div className="ChatPage">
            <h2>Вы: {username}</h2>
            <Chat messages={messages} />
            <MessageForm formDataSender={(str: string) => sendMessage(str, userId)} />
        </div>
    )
}