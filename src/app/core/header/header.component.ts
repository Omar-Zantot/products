import { Component } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  // template: `<p>header works from templet !</p>`,
  styleUrls: ['./header.component.scss'],
  // styles: [
  //   `
  //     :host {
  //       display: block;
  //       background-color: tomato;
  //       padding: 1rem;
  //       color: #fff;
  //     }
  //   `,
  // ],
  host: {
    class: 'header',
    id: 'header',
  },
})
export class HeaderComponent {
  // @HostBinding('class') hostClass = 'header';
  // @HostBinding('id') hostId = 'header';
}
