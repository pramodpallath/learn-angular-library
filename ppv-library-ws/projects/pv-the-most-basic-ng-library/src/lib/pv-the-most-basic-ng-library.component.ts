import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-pv-the-most-basic-ng-library',
  template: `
    <p class='bg-yellow-500 p-20'>
      
      This is the Most basic NG Library
    </p>
  `,
  styles: [
  ]
})
export class PvTheMostBasicNgLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
