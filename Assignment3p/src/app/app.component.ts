import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  k:number;
  l:number;
  arr = new Array(1);
  add()
  {
    this.l=this.arr.push(this.k)
  }
// squareNumber(){
// if (this.firstNumber>=0)
// {
//   this.sr=parseFloat(Math.sqrt(this.firstNumber).toFixed(2))
//   if((this.sr*this.sr)==this.firstNumber)
//   {this.lis="Its a perfect square"
//     console.log("Its a perfect square")
//   }
//   else{
//     this.lis="Sorry !!! Its not a perfect square"
//     console.log(" Sorry !!! Its not a perfect square")
//   }
// }}
  }
