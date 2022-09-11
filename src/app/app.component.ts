import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //di sini bisa juga di-divine html karena terkadang kita cuman butuh dikit
  styleUrls: ['./app.component.scss'] //bisa lebih dari satu file. Tapi kalo mau nge-divine juga bisa di sini. CSS ini optional
})
export class AppComponent implements OnInit { //semua file di angular pakenya class
  title = 'angular-pascal-9';

  message: string = 'Hola'; //ini contoh variable
  
  getMessage(): string { //ini contoh function
    return `Hai`;
  }

  people: string[] = ['John', 'Sisca', 'Budi'];

  getPeople(): string {
    let result: string = '';
    for(const person of this.people) {
      result += person;
    }
    return result;
  }

  employee = {
    name: 'John',
    isStatus: true,
  }

  employees = [
    {
      name: 'John',
      address: 'Jl. Kebon Kacang',
    },
    {
      name: 'Daud',
      address: 'Bekasi',
    },
    {
      name: 'Fii',
      address: 'Tangerang Selatan',
    },
  ];

  increment: number = 1;

  // Property Binding
  image = {
    src: '/assets/image/portofolio/work-1.jpeg',
    alt: 'Gambar kerja'
  }

  // InnerHTML
  fullName: string = 'My name is <strong>John</strong>';
  color: string = 'blue';
  fontSize: string = '5rem';
  fontWeight: string = 'bold';

  styles = {
    color: 'red',
    fontSize: '4rem',
    fontWeight: 'bold'
  }

  isDisabled: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true
    }, 2000)
  }

  // Event Binding
  // di html kan bisa cloick, onLoad, change, keyPress, etc
  onClickButton(): void {
    this.message = 'Hello';
  }

  // input event
  onKeyPress(event: any):void {
    this.message = event.target.value;
  }
}
