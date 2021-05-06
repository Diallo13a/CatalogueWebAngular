import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catalogueService: CatalogueService, private router: Router) { }
  categories;
  currentCategory;
  // products;
  ngOnInit(): void {
    this.catalogueService.getAllCategories()
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err);
      });
  }

  onGetProducts(cat): any {
    this.currentCategory = cat;
    const url = cat._links.products.href;
    this.router.navigateByUrl('/products/' + btoa(url)); // btoa convertir url en base 64
    // console.log(cat._links.products.href);
    /*this.catalogueService.getResource(cat._links.products.href)
      .subscribe(data => {
        this.products = data;
      }, err => {
        console.log(err);
      });*/
  }
}
