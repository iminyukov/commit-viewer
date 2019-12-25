import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="loader">
    <div class="item i1"></div>
    <div class="item i2"></div>
    <div class="item i3"></div>
  </div>
  `,
  styles: [`
    .loader {
      display: flex;
      height: 100px;
      justify-content: center;
    }
    .item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: black;
      margin: 15px;
    }

    .i1 {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: anim;
    }
    .i2 {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: anim;
      animation-delay: 0.3s;
    }
    .i3 {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: anim;
      animation-delay: 0.6s;
    }

    @keyframes anim {
    from: {
      margin-top: 0;
    }
    50% {
      margin-top: 30px;
    }
    to: {
      margin-top: 0;
    }
  `]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
