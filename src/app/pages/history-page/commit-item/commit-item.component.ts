import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commit-item',
  template: `
    <div class="commit-item"
         [style.margin-top]="marginTop + 'px'"
         [style.margin-bottom]="marginBottom + 'px'"
    >
      <div class="commit-item__title" [innerText]="message"></div>
      <div class="commit-item__user">
        <div class="commit-item__user__img-wrapper">
          <img [src]="avatarURL" alt="user image"/>
        </div>
        <div class="commit-item__user__name">
          <b [innerText]="userName"></b> committed on <i>{{ date | date: 'MMM d, y' }}</i>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .commit-item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      border: 1px #444d56 solid;
      color: #444d56;
      font-family: Helvetica,Arial,sans-serif
    }
    .commit-item__title {
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 7px;
    }
    .commit-item__user {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
    }
    .commit-item__user__img-wrapper {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .commit-item__user__img-wrapper img {
      width: 100%;
    }
  `]
})
export class CommitItemComponent implements OnInit {
  @Input() message: string;
  @Input() userName: string;
  @Input() avatarURL: string;
  @Input() date: Date;
  @Input() marginTop = 3;
  @Input() marginBottom = 3;

  constructor() { }

  ngOnInit() {
  }

}
