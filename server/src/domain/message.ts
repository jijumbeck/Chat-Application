
export interface Message {
    id: number, 
    userId: number,
    text: string,
    messageInfo?: MessageInfo,
}

export interface MessageInfo {
    dateTime?: Date,
}