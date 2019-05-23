import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {

open='true';
arr=['js','html','angular','node','css'];
arr1=[
  {name:'ahmed',age:'25'},
  {name:'chehir',age:'26'},
  {name:'amir',age:'22'},
  {name:'firass',age:'22'},
];
num='';
  constructor() { }

  ngOnInit() {
  }

}
