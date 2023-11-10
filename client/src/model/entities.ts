
export interface Message {
    id: string,
    username: string,
    text: string,
    messageInfo?: string,
}

export interface Chat {
    messages: Array<Message>
}

export interface User {
    id: string,
    name: string, 
}