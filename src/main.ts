import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  imports: [CommonModule, A11yModule]
})
export class App {
  name = 'Angular';
  isOpen = false;
  save() { }
  
  closeModal() {
    this.isOpen = false;
    document.getElementById('dialog-btn')?.focus()
  }
  openModal() {
    this.isOpen = true;
    setTimeout(() => document.getElementById('dialog-close')?.focus())
  }

}

bootstrapApplication(App);
