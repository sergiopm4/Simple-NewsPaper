import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})
export class TitularesComponent {

  // countriesInComponent: object[] = this._data.getCountries();






  constructor(public _data: DataService, public _rute: ActivatedRoute) {
  }



}
