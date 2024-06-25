import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    postalCode: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private userService: UserService) {}

  ngOnInit() {
    const user = this.userService.loggedUser;
    if(user?.address)
      {

        this.userFormGroup.controls['firstName'].setValue(user.firstName);
        this.userFormGroup.controls['lastName'].setValue(user.lastName);
        this.userFormGroup.controls['gender'].setValue(user.gender);
        this.userFormGroup.controls['postalCode'].setValue(user.postalCode);
        this.userFormGroup.controls['phone'].setValue(user.phone);
        this.userFormGroup.controls['address'].setValue(user.address);
        this.userFormGroup.controls['country'].setValue(user.country);
        this.userFormGroup.controls['city'].setValue(user.city);
      }
  }
  get Sex() {
    return Sex;
  }

  get PerfumeType() {
    return PerfumeType;
  }

  save(){
    let user = this.userService.loggedUser;
    user.firstName = this.userFormGroup.controls['firstName'].value!;
    user.lastName = this.userFormGroup.controls['lastName'].value!;
    user.gender = this.userFormGroup.controls['gender'].value!;
    user.postalCode = this.userFormGroup.controls['postalCode'].value!;
    user.phone = this.userFormGroup.controls['phone'].value!;
    user.phone = this.userFormGroup.controls['phone'].value!;
    user.address = this.userFormGroup.controls['address'].value!;
    user.country = this.userFormGroup.controls['country'].value!;
    user.city = this.userFormGroup.controls['city'].value!;
    console.log(user)
    this.userService.update(user)
  }
}
