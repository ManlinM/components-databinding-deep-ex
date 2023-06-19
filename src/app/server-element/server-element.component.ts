import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  //only defining the type of the element obj
  //to use in the template

  //By default all properties of current element are ONLY available within
  //If need to use for the parent component, need to use @Input
  //any component hosting the current element, will be able to bind the property
  //below
  //'' value inside input is alias of element
  //which also specify which property is used to bind from parent to child
@Input('srvElement') element:{type:string,name:string,content:string};

}
