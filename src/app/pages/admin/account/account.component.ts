import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDialogModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
