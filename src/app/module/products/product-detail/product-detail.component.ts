import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
//l'import de activatedroute afin de récupérer un paramêtre dans une adresse url
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';
import { IProduct, ProductService  } from '../../../shared/models/product.service';
//pour le formulaire
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

export enum PRODUCT_DETAIL_MODE {
   EDIT,
   VIEW
 }

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {


  product$: Observable<IProduct>;

  productForm: FormGroup

  mode: PRODUCT_DETAIL_MODE = PRODUCT_DETAIL_MODE.VIEW

    // Use to store the subscription and unsubscribe into ngOnDestroy method
    private productSubscription: Subscription


//injecter dans le constructeur pour utiliser les méthodes du fichier(product service)
//variable avec dollard est un observaable
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    formBuilder: FormBuilder
  ){
    //this.id$ = this._route.paramMap.map(paramMap => paramMap.get('id'))
    //paramMap est un objet avec l'id et qui aura la valeur de l'url
    //this.id$ = this._route.params.map(param => Number(param.id))
    //le .map transforme la bonne valeur en string
    this.product$ = this._route.data.map(data => data.product);
    //this.id$.subscribe (pour écouter si il y a un changement pour rappeler productService.getProduct)

    // Init the form with formBuilder
     this.productForm = formBuilder.group({
       'id': '',
       'productName': ['', Validators.minLength(6)],
       'productCode': ['', Validators.minLength(6)],
       'releaseDate': '',
       'price': '',
       'description': '',
       'starRating': ['', Validators.compose([Validators.max(5), Validators.min(0)])],
       'imageUrl': ''
     })
  }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
     // Destroy subscription when component goes away
     this.productSubscription.unsubscribe()
   }

  getNextProductId(id: number) {
    return id + 1;
  }

  isEdit() {
     return this.mode === PRODUCT_DETAIL_MODE.EDIT
   }

   toggleMode() {
     this.mode = this.isEdit() ? PRODUCT_DETAIL_MODE.VIEW : PRODUCT_DETAIL_MODE.EDIT
   }

   // We listen click on star and set the value into our form
   onRatingClicked(rating) {
     this.productForm.get('starRating').setValue(rating)
   }

     initForm() {
        // We store the subscription into this.productSubscription
        this.productSubscription = this.product$.subscribe(product => {
          this.productForm.setValue(product)
        })
      }

      onSubmit() {
         if (this.productForm.valid) {
           this._productService.saveProduct(this.productForm.value)
             .subscribe(product => {
              // This line update the current product information when back to view mode
              // But it breaks other pages !
              // Let's move to step-11 to fix that
              //this.product$ = Observable.from([product])
               this.toggleMode()
             })
         }
      }


}
