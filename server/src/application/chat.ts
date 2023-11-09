import { Message } from "../domain/message";
import { ChatUser } from "../domain/user";

class Chat {
    chatHistory: Array<Message>;
    chatUsers: Map<string, ChatUser>;

    constructor() {
        this.chatHistory = new Array();
        this.chatUsers = new Map()
    }

    addMessage(message: Message) : void {
        this.chatHistory.push(message);
    }

    addUser(user: ChatUser) : void {
        this.chatUsers[user.id] = user;
    }

    removeUser(id: string) : void {
        delete this.chatUsers[id];
    }
}