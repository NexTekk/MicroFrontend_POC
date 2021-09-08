import { Component } from '@angular/core';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent {
  title = 'Principles';
  principles = [
    {
      letter: 'S',
      principle: 'Single Responsibility Principle',
      description: 'A class should have one and only reason to change, meaning that a class should only have one job.'
    },
    {
      letter: 'O',
      principle: 'Open-closed Principle',
      description: 'Objects or entities should be open for extension but closed for modification.'
    },
    {
      letter: 'L',
      principle: 'Liskov Substitution Principle',
      description: 'Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass.'
    },
    {
      letter: 'I',
      principle: 'Interface segregation principle',
      description: "A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use."
    },
    {
      letter: 'D',
      principle: 'Dependency Inversion Principle',
      description: 'Entities must depend on abstractions not on concretions. It states that the high level module must not depend on low level module, but they should depend on abstractions.'
    },
  ]
}
