import { Component, Input } from "@angular/core";
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';
import { Note } from "../../../enums/notes.enum";
import { NgFor, NgIf } from "@angular/common";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, NgFor, NgIf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  get Sex() {
    return Sex;
  }
  get PerfumeType() {
    return PerfumeType;
  }
  get Note() {
    return Note;
  }
  public slides = [
    { src: "/assets/brand1.png" },
    { src: "/assets/brand2.png" },
    { src: "/assets/brand3.png" }
  ]; 

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
