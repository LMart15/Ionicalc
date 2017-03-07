import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  outPut;
  param1;
  param2;
  ops;
  result;
  containsDigit;

  constructor(public navCtrl: NavController) {
    this.outPut = 0;
    this.containsDigit = false;
  }

  onDigitClick(k)
  {
    if (this.outPut === 0)
    {
    this.outPut = "";
  }
    this.outPut += k;
  }

  onDecimalClick(){

    if (this.containsDigit === false){
    this.outPut += ".";
    }
    this.containsDigit = true;
  }

  onSignClick(){
    if (this.outPut > 0){
      this.outPut = -Math.abs(Number(this.outPut));
    }else if (this.outPut < 0){
      this.outPut = Math.abs(Number(this.outPut));
    }
  }

  onOperationClick(x){
    this.param1 = Number(this.outPut);
    this.ops = x;

    this.outPut = 0;
    this.containsDigit = false;
  }

    onPercentClick(x){
    this.param1 = Number(this.outPut);
    this.result = this.param1 / 100;
    this.outPut = this.result;
  }

    onEqualsClick(){
    this.param2 = this.outPut;
  
switch(this.ops)
{
  case "+": 
    this.result = Number(this.param1) + Number(this.param2);
    break;
  case "-":  
    this.result = this.param1 - this.param2;
    break;
  case "x":  
    this.result = this.param1 * this.param2;
    break;
  case "/":  
    this.result = this.param1 / this.param2;
    break;     
  }

  this.outPut = this.result;
    }

  onClearClick()
  {
    this.outPut = 0;
    this.containsDigit = false;
  }



}
