import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
/*first_name='';
name='';
email='';
pass='';
tab=[];*/
tab=[];
personne:FormGroup;
  constructor() {
    this.personne=new FormGroup({
      name:new FormControl(),
      firstname:new FormControl(),
      email:new FormControl(),
      pass:new FormControl(),
    });
   }

  ngOnInit() {
  }
  register(){
   //  let personne={
   //   first_name:this.first_name,
   //  name:this.name,
   //   email:this.email,
   //  pass:this.pass,
   // }
   this.tab.push(this.personne.value);
    console.log(this.tab);

    
  }
}








