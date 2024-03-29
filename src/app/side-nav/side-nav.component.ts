import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;
 list = [
  {
    number:'1',
    name: 'home',
    icon:'fa-solid fa-house',
  
  },
  {
    number:'2',
    name: 'Product',
    icon:'fa-solid fa-box',
  
  },
  {
    number:'3',
    name: 'setting',
    icon:'fa-solid fa-gear',
  
  },
  {
    number:'4',
    name: 'About',
    icon:'fa-solid fa-circle-info',
  
  },
  {
    number:'5',
    name: 'Contact',
    icon:'fa-solid fa-phone',
  
  },
 ]
 constructor() {}
 ngOnInit(): void {
   
 }
}
