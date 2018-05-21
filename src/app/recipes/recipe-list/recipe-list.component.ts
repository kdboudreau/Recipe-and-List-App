import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','this is a test','https://i0.wp.com/www.thecapablestudent.com/wp-content/uploads/2016/10/recipe-575434_640-1.png?fit=640%2C546&ssl=1')
  ];
  constructor() { }

  ngOnInit() {
  }

}
