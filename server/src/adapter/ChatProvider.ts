import { Chat } from "../application/chat.js";
import { toMessage } from "../domain/message.js";
import { ChatUser, User } from "../domain/user.js";

export class ChatProvider {
    chat: Chat;

    constructor() {
        this.chat = new Chat();
    }

    addUser(): User {
        const newUser = new ChatUser();
        this.chat.addUser(newUser);
        return newUser;
    }

    removeUser(id: string) {
        this.chat.removeUser(id);
    }

    addMessage(message: string, userId: string) {
        const messageObject = toMessage(message, userId);
        this.chat.addMessage(messageObject);
        return {
            ...messageObject,
            username: this.chat.chatUsers.get(messageObject.userId)?.name
        };
    }
}