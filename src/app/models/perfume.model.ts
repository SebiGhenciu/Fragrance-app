import { Note } from "../enums/notes.enum";
import { PerfumeType } from "../enums/perfume-type.enum";
import { Sex } from "../enums/sex.enum";

export interface Perfume {
    id: string;
    name: string;
    price: number;
    brand: string;
    quantity: number;
    images: string[]
    type: PerfumeType;
    sex: Sex;
    notes: Note[];
    description: string;
    fragranticaLink: string

}