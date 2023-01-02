import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = 'Flubber';
  public age: number = 18;
  public img: string = 'https://source.unsplash.com/random';
  public btnDisabled: boolean = false;
  public person: Persona = {
    name: 'El flubber',
    age: 19,
    avatar: 'https://source.unsplash.com/random'
  }
  public names: (string | number)[] = ['Flubber', 'Rafael', 'Flubberson'];
  public newName: string = '';

  public toggleButton(): void {
    this.btnDisabled = !this.btnDisabled;
  }
  public increaseAge(): void {
    if (this.person.age !== undefined) this.person.age += 1;
  }
  public onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  public changeName(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  public addName(): void {
    this.names.push(this.newName);
    this.newName = '';
  }
  public deleteName(index: number): void {
    this.names.splice(index, 1);
  }
}
interface Persona {
  name?: string;
  age?: number;
  avatar?: string;
}
