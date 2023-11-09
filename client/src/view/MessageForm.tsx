import { IconButton, TextField } from "@mui/material";
import { FormEventHandler, useState } from "react"
import SendIcon from '@mui/icons-material/Send';

interface MessageFormProps {
    formDataSender: (text: string) => void
}

export const MessageForm = ({ formDataSender }: MessageFormProps) => {
    const [textMessage, setTextMessage] = useState('');

    const onSumbitEventHandler: FormEventHandler = e => {
        e.preventDefault();
        formDataSender(textMessage);
    }

    return (
        <form 
            onSubmit={onSumbitEventHandler}
        >
            <TextField />
            <IconButton
                type='submit'
            >
                <SendIcon />
            </IconButton>
        </form>
    )
}