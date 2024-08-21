import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Product } from './type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  private api = environment.api;

  product: Product[] = [];

  constructor() {
    this.getDataProducts();
  }

  async getDataProducts() {
    try {
      const response = await axios({
        method: 'get',
        url: `${this.api}/products`,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(response.data);
      this.product = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
