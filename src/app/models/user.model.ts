import { Note } from "../enums/notes.enum";
import { PerfumeType } from "../enums/perfume-type.enum";
import { Sex } from "../enums/sex.enum";

export interface User {
    id: string;
    username: string;
    password: string;
    email: string
    role: number;

}

export interface UserDAO extends User {
    loginTimeStamp: string;
}