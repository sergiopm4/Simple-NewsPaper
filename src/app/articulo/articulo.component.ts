import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  index: string = "";


  constructor(public _data: DataService, public _rute: ActivatedRoute) {
    this.index = _rute.snapshot.params["id"];

  }




}
