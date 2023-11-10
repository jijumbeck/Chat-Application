import { v4 as uuidv4 } from 'uuid';

export interface Message {
    id: string, 
    userId: string,
    text: string,
    messageInfo?: MessageInfo,
}

export interface MessageInfo {
    dateTime?: Date,
}

export function toMessage(message: string, userId: string): Message {
    return {
        id: uuidv4(),
        text: message, 
        userId: userId,
    }
}