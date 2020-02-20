import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  //Recogida de datos de la API.
  newsDataApi: string[] = [];

  //Nuevo array con el inputFilter aplicado a la API.
  newsDataFilterApi: string[] = [];

  //Filtrado de paises en titulares.component.
  selectedCountry: string = "";
  //Filtrado de paises en titulares.component.
  selectedCategory: string = "";

  //filto por noticias pais para poner el code en template en la URL de la API.
  countriesInService: object[] = [
    { country: "Venezuela", code: "ve" },
    { country: "US", code: "us" },
    { country: "China", code: "ch" },
    { country: "Japan", code: "jp" },
    { country: "Rusia", code: "ru" },
    { country: "France", code: "fr" },

  ];

  getCountries() {
    return this.countriesInService;
  }

  setData() {
  }

  refresh() {
    location.reload();
  }

  //Welcome tras hacer el login.
  welcomeFunction() {
    setTimeout(() => {
      alert("Welcome to The News Solution!!")
    }, 500);
  }

  //Funcion que filtra por pais en el EndPoint. De esta forma hace una nueva llamada
  //a la API y refresca newsDataApi con los nuevos datos del pais.
  filterCountry() {
    this._http.get(`http://newsapi.org/v2/top-headlines?country=${this.selectedCountry}&category=business&apiKey=4d508d1d70cf4bfb82e883f4e5621ce3`)
      .subscribe((responseApi) => {
        this.newsDataApi = responseApi["articles"]
      })
  }


  //Filtro de categoria.
  filterCategory(category: string) {
    this._http.get(`http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4d508d1d70cf4bfb82e883f4e5621ce3`)
      .subscribe((responseApi) => {
        this.newsDataApi = responseApi["articles"]
      })
  }


  //filtro del imput por palabra.
  filterByWord(word: string) {
    word = word.toLowerCase().trim(); //el trim() te quita los espacios del principio de la palabra.
    this.newsDataFilterApi = []; //esto es para vaciar la busqueda cada vez que buscas.

    for (let obj of this.newsDataApi) {
      let nombreData = obj["title"].toLowerCase();
      let descriptionData = obj["description"].toLowerCase();
      if (nombreData.indexOf(word) >= 0) {
        this.newsDataFilterApi.push(obj);
      } else if (descriptionData.indexOf(word) >= 0) {
        this.newsDataFilterApi.push(obj);
      }

    }
    return this.newsDataFilterApi;
  }




  //llamada GET a la API.
  constructor(public _http: HttpClient) {
    _http.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d508d1d70cf4bfb82e883f4e5621ce3")
      .subscribe((responseApi) => {
        // console.log(responseApi);
        this.newsDataApi = responseApi["articles"]
      })
  }


}
