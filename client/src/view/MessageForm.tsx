import { IconButton, TextField } from "@mui/material";
import { FormEventHandler, useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import './MessageForm.css';

interface MessageFormProps {
    formDataSender: (text: string) => void
}

export const MessageForm = ({ formDataSender }: MessageFormProps) => {
    const [textMessage, setTextMessage] = useState('');

    const onSumbitEventHandler: FormEventHandler = e => {
        e.preventDefault();
        console.log("onSubmit: ", textMessage);
        formDataSender(textMessage);
        setTextMessage('');
    }

    return (
        <form 
            onSubmit={onSumbitEventHandler}
            className="MessageForm"
        >
            <TextField 
                value={textMessage}
                onChange={e => setTextMessage(e.target.value)}
                fullWidth
                sx={{
                    "backgroundColor": "rgb(10, 40, 80)",
                    "textAlign": "center",
                    input: {
                        color: 'white'
                    }
                }}
            />
            <IconButton
                type='submit'
                color="primary"
            >
                <SendIcon />
            </IconButton>
        </form>
    )
}