import { Component } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //how to access the element property in the server-element component?

  //creating array of js objs
  serverElements = [{type:'server',name:'Testserver',content:'Just a test!'}];
 
  addToElements(elementData: any[]) {
    const [type, name, content] = elementData;
    this.serverElements.push({ type: type, name: name, content: content });
  }
  // addToElements(type:string, name:string, content:string){
  //   this.serverElements.push({type,name,content});

  // }
}
