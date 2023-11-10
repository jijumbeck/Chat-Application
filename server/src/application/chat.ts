import { Message } from "../domain/message.js";
import { ChatUser } from "../domain/user.js";

export class Chat {
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
        this.chatUsers.set(user.id, user);
    }

    removeUser(id: string) : void {
        this.chatUsers.delete(id);
    }
}