import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  title='angular';
imgsrc="../../assets/img/images (1).jpg";

col=5;
isactive=true;

val='hanene';
num1;
num2;
num3;
  constructor() { }

  ngOnInit() {
  }
login(){
  console.log('login');
}
 
somm(){
  
 this.num3 = this.num1+ this.num2
}
multip(){
  this.num3 = this.num1 * this.num2
}
div(){
  this.num3 = this.num1 / this.num2
}
sous(){
  this.num3 = this.num1 - this.num2
}


}


