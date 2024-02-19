import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-add-silo-product-page',
  templateUrl: './add-silo-product-page.component.html',
  styleUrls: ['./add-silo-product-page.component.scss']
})
export class addSiloProductPageComponent implements OnInit {
  showModal: boolean = false;

  isLoadingAdd : boolean = false;
  isLoadingList : boolean = false;
  isLoadingEditDelete : boolean = false;

  error : string = "";

  product : Product = {
    id :  0,
    productName : "",
    productCategory : ProductCategory.Silo,
    productGrading : "",
    created: new Date(),
    archived: false,
  }

  products : Product[];

  selectedProduct : Product;

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  EditProductModal(p : Product) {
    this.selectedProduct = p;
    console.log("selected product: " + JSON.stringify(this.selectedProduct));

    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    console.log('Product data:', this.product);
    this.product.productCategory = ProductCategory.Silo
    //api post call
    this.isLoadingAdd = true;
    this.apiService.post<ApiResponse>('api/product',this.product)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingAdd = false;
          this.product = resp.item;
          console.log('api/product :' + JSON.stringify(this.product));

          this.product = {
            id :  0,
            productName : "",
            productCategory : ProductCategory.Silo,
            productGrading : "",
            created: new Date(),
            archived: false,
          };

          this.loadProducts();
        }
        else{
          this.isLoadingAdd = false;
          this.error = resp.message;
          console.log('api/product :' + this.error);
        }
      })
  }

  loadProducts()
  {
        //api get call
        this.isLoadingList = true;
        this.apiService.get<ApiResponse>('api/Product')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.isLoadingList = false;
              this.products = resp.items;
              console.log('api/Product: ' + JSON.stringify(this.products));
            }
            else{
              this.isLoadingList = false;
              this.error = resp.message;
              console.log('api/Product: ' + this.error);
            }
          })
  }


  onEditProduct() {
    console.log('Selected Product data:', this.selectedProduct);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.put<ApiResponse>('api/product',this.selectedProduct.id,this.selectedProduct)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedProduct = resp.item;
          console.log('put api/product :' + JSON.stringify(this.selectedProduct));

          this.selectedProduct = {
            id :  0,
            productName : "",
            productCategory : ProductCategory.Silo,
            productGrading : "",
            created: new Date(),
            archived: false,
          };
          this.closeModal();
          this.loadProducts();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('put api/product :' + this.error);
          this.closeModal();
        }
      })


  }

  onDeleteProduct() {
    console.log('Selected Product data:', this.selectedProduct);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.delete<ApiResponse>('api/product',this.selectedProduct.id)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedProduct = resp.item;
          console.log('delete api/product :' + JSON.stringify(this.selectedProduct));

          this.selectedProduct = {
            id :  0,
            productName : "",
            productCategory : ProductCategory.Silo,
            productGrading : "",
            created: new Date(),
            archived: false,
          };
          this.closeModal();
          this.loadProducts();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('delete api/product :' + this.error);
          this.closeModal();
        }
      })


  }
}