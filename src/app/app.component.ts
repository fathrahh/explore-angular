import { Component } from '@angular/core';

interface products {
  name: string;
  price: number;
  date: string;
}

const Products: products[] = [
  { name: 'krupuk', price: 2000, date: new Date().getTime().toString() },
  { name: 'Jengkol', price: 4000, date: new Date().getTime().toString() },
  { name: 'Steak', price: 60000, date: new Date().getTime().toString() },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Something new';
  products = Products;
}
