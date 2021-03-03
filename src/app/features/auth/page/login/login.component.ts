import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  AdminName = new FormControl('');


  adminData = new FormGroup({
    Email: new FormControl(),
    Password: new FormControl()
  });

  onSubmit() {
    console.log(this.adminData.value);
  }
}
