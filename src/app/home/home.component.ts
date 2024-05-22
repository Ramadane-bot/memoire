import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from "@angular/material/icon";
import {findIndex} from "rxjs";
export interface PeriodicElement {
  name: string;
  position: number;
  prix: number;
  quantite: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'orange', prix: 1.0079, quantite: 2},
  {position: 2, name: 'apple', prix: 4.0026, quantite: 45},
  {position: 3, name: 'ananas', prix: 6.941, quantite: 3},
  {position: 4, name: 'cocos', prix: 9.0122, quantite: 24},
  {position: 5, name: 'fraise', prix: 10.811, quantite: 6},
  {position: 6, name: 'piment', prix: 12.0107,quantite: 7},
  {position: 7, name: 'goyave', prix: 14.0067,quantite: 32},
  {position: 8, name: 'papaye', prix: 15.9994,quantite: 5},
  {position: 9, name: 'citron', prix: 18.9984,quantite: 17},
  {position: 10, name: 'rezin', prix: 20.1797,quantite: 34},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule,
    MatProgressBarModule,MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIcon,
  ],
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'prix', 'quantite', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() {

  }

  supprimer(id: number) {
    ELEMENT_DATA.splice(id, 1);
    this.dataSource.data = [...ELEMENT_DATA];

  }
  modifier(id: number) {
    ELEMENT_DATA[id].quantite += 1;
    this.dataSource.data = [...ELEMENT_DATA];
  }
  protected readonly findIndex = findIndex;


}
