import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  tiles: Tile[] = [
    {text: 'Top Panel', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Middle Left Panel', cols: 1, rows: 16, color: 'lightgreen'},
    {text: 'Middle Right Panel', cols: 1, rows: 16, color: 'lightgreen'},
    {text: 'Bottom Panel', cols: 2, rows: 1,  color: 'lightpink'},
  ];

}
