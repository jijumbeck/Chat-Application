import { dogNameGenerator } from "./nameGenerator.js";
import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: string;
    name: string;
}

export class ChatUser implements User {
    id: string;
    name: string;

    constructor(name?: string) {
        this.id = uuidv4();

        if (name === undefined) {
            this.name = dogNameGenerator.getDefaultName();
        } else {
            this.name = name;
        }
    }
};

