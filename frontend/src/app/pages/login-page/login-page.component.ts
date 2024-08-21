import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private api = environment.api;

  formDataLogin = {
    email: '',
    password: '',
  };

  async login() {
    try {
      const response = await axios.post(
        `${this.api}/users/login`,
        this.formDataLogin
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
