import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  showWelcome = false;

  constructor() {
    this.showWelcome = location.pathname !== '/books';
    console.log(this.showWelcome);
  }

  title = 'Books';
  books = [
    {
      title: 'Leadership and the One Minute Manager',
      authors: 'Ken Blanchard, Patricia Zigarmi, Drea Zigarmi'
    },
    {
      title: 'Microsoft .NET Architecting Applications for the Enterprise - 2nd Edition',
      authors: 'Dino Esposito, Andrea Saltarello'
    },
    {
      title: 'Linux Shell Scripting with Bash',
      authors: 'Ken O. Burtch'
    },
    {
      title: 'Modern Java In Action',
      authors: 'Raoul-Gabriel Urma, Mario Fusco, Alan Mycroft'
    },
    {
      title: 'Scrum: The Art of Doing Twice the Work in Half the Time',
      authors: 'Jeff Sutherland'
    }
  ];

}
