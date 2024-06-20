import { Note } from "../enums/notes.enum";
import { PerfumeType } from "../enums/perfume-type.enum";
import { Sex } from "../enums/sex.enum";

export interface Contact {
    sex: Sex;
    mobile: number;
    name: string;
    lastName: string;
    address: string;
    city: string;
    county : string;
    postalCode: string;

}