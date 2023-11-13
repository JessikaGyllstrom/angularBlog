import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  name = 'John';
  lastname="Smith"
  editing=0;

  save(itemId: any){
    console.log('Save on %s was called', itemId);
    this.editing=0;
  }
}
