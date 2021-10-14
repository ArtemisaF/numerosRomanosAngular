import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-romanos',
  templateUrl: './my-romanos.component.html',
  styleUrls: ['./my-romanos.component.css']
})
export class MyRomanosComponent implements OnInit {

  constructor() {  }
  romanoArray: string[]=['I','V','X','L','C','D','M'];
  resultArray: number[]=[1,5,10,50,100,500,1000];
  
  ngOnInit(): void {
  }

  convertirRD(numeroRomano:string) {
    let res=0;
    
       for (let index = numeroRomano.length-1; index >= 0; index--) {
         if ((index-1)>=0) {
          const element = numeroRomano[index];
          const element2= numeroRomano[index-1];
          const num1= this.resultArray[this.romanoArray.indexOf(element)];
          const num2 = this.resultArray[this.romanoArray.indexOf(element2)];
          if (num1<=num2) {
            res = res + num1;
          } else{
            res = res + (num1- num2);
            index--
          }
         } else {
          const element = numeroRomano[index];
          const num1= this.resultArray[this.romanoArray.indexOf(element)];
          res= res + num1;
         }
         
       }
       alert(res);
    return(res);
    

  }

}
