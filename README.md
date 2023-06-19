# What I learned
## Component Interaction/Communication
-Through this project, I have learned that data binding between components can become more complex when transferring data through multiple components, especially as the application grows in complexity. 
    - To address this challenge, Angular provides the @Input and @Output decorators, which facilitate the seamless binding of data between components. 
    - By utilizing @Input, data can be passed from a parent component to its child component, enabling easy communication and sharing of information. 
    - On the other hand, @Output allows child components to emit events and send data back to their parent components. 
    - This two-way communication approach offered by @Input and @Output simplifies the process of data transfer, enhances component interaction, and promotes maintainable and scalable Angular     
      applications.

## @Input
- used to let parent component to update data in the child component
  - How:
       - Config both parent and child
       - In the child component, import Input from angular core
       - Use @Input decorator with the property
       - In the parent component, use child's selector in the template
       - use property binding in the child's selector
       - In the component class, designate the value for the property,
         which will be bind back to the child component
  - The code:
    - Parent to Child
    - In the CHILD: server-element component
      - @Input('srvElement') element:{type:string,name:string,content:string};
      - The element property will obtain its values from the PARENT: app component
    - In the PARENT: app component
      - In its template, ngFor is used to loop through the property 'serverElements',
        which will be passed to 'srvElement'
## @Output
- used to let child component to update data in the parent component
  - How:
    - Config both parent and child
    - In the child component, import Output and EventEmitter
      - Must use EventEmitter and Output togather
      - To raise an event
    - In the parent component, use child's selector in the template
    - Declare property which will obtain the data from the child
    - use event binding in the child's selector, which is embedded in the parent's template
  - The code:
    - Child to Parent
    - In the CHILD: cockpit component
      - @Output() newElementEvent = new EventEmitter<{ type: string, name: string, content: string }>();
      - addNewElement(type:string,name:string,content:string){this.newElementEvent.emit({type,name,content});}
      - When an event is triggered, the addNewElement will obtain the data and emitt to the newElementEvent
    - In the PARENT: app component
      - In its template, the child 'cockpit' selector, the event we defined above, is used to obtain the data
        that are emitted from the child
      - <app-cockpit (newElementEvent)="addToElements([$event.type, $event.name, $event.content])"></app-cockpit>
      - Then the data are stored in the property 'serverElements' for passing to the child 'server-element' component
   
