import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any;
  constructor(private catalogueService: CatalogueService, private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        console.log(this.route.snapshot.params.urlProds);
        const url = atob(this.route.snapshot.params.urlProds); // atob permet de decoder base64
        console.log(url);
        this.getProducts(url);
      }
    });
  }

  ngOnInit(): void {
  }

  getProducts(url): any {
    this.catalogueService.getResource(url)
      .subscribe(data => {
        this.products = data;
      }, err => {
        console.log(err);
      });

  }
}
