import { useEffect, useRef, useState } from 'react';
import { Socket, io } from "socket.io-client";
import { AppDispatch, useAppDispatch } from '../state/store';
import { setId, setName } from '../state/userSlice';
import { Message, User } from '../entities';
import { addMessage } from '../state/chatSlice';
import { SOCKET_PATH } from './constants';

export function useChatSocket(
    url: string,
    dispatch: AppDispatch
) {
    const socketRef = useRef<Socket>();

    useEffect(() => {
        socketRef.current = io(SOCKET_PATH);

        socketRef.current.on('chat-message', data => {
            const message = JSON.parse(data) as Message;
            dispatch(addMessage(message));
        });

        socketRef.current.on('init-user', data => {
            const user = JSON.parse(data) as User;
            dispatch(setId(user.id));
            dispatch(setName(user.name));
        });
    }, []);

    const sendMessage = async (message: string, id: string) => {
        console.log("useChatSocket: ", message, id);
        if (socketRef.current) {
            socketRef.current.emit('chat-message', message, id);
        }
    }

    const sendNewName = async (name: string, id: string) => {
        if (socketRef.current) {
            socketRef.current.emit('change-name', name, id);
        }
    }

    return {
        sendMessage, sendNewName
    }
}