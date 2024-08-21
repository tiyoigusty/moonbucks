import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  private api = environment.api;

  formDataRegister = {
    email: '',
    password: '',
    fullname: '',
  };

  async register() {
    try {
      const response = await axios.post(
        `${this.api}/users/register`,
        this.formDataRegister
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
