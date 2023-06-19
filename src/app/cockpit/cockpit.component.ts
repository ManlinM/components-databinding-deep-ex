import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  
  //add an evenEmitter for the event click
  @Output() newElementEvent = new EventEmitter<{ type: string, name: string, content: string }>();

  //The following function is not working
  //as we are now inside child component
  //when the button is clicked
  //the newServerName,content,and elements values need to be added to 
  //the server element components to display

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
    
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  addNewElement(type:string,name:string,content:string){
    this.newElementEvent.emit({type,name,content});

  }
}
