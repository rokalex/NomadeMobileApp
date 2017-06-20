import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
//l'import de activatedroute afin de récupérer un paramêtre dans une adresse url
import {Observable} from 'rxjs/Observable';
import { IProduct } from '../../../shared/models/product.service';

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //id$: Observable<number>


product$: Observable<IProduct>; //va nous premettre


//injecter dans le constructeur pour utiliser les méthodes du fichier(product service)
//variable avec dollard est un observaable
  constructor(private _route: ActivatedRoute) {
    //this.id$ = this._route.paramMap.map(paramMap => paramMap.get('id'))
    //paramMap est un objet avec l'id et qui aura la valeur de l'url
    //this.id$ = this._route.params.map(param => Number(param.id))
    //le .map transforme la bonne valeur en string
    this.product$ = this._route.data.map(data => data.product);
    //this.id$.subscribe (pour écouter si il y a un changement pour rappeler productService.getProduct)

  }

  ngOnInit() {}

  getNextProductId(id: number) {
    return id + 1;
  }

}
