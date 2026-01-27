import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  imports:[CommonModule]
})
export class App {
  name = 'Angular';
  isOpen=false;
  save(){}
  closeModal(){
    this.isOpen=false;
  }
  openModal(){
    this.isOpen=true;
  }

}

bootstrapApplication(App);
