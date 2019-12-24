import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commit-item',
  template: `
    <div class="commit-item">
      <div class="commit-item__title" [innerText]="message"></div>
      <div class="commit-item__user">
        <div class="commit-item__user__img-wrapper">
          <img [src]="avatarURL" alt="user image" draggable="false" />
        </div>
        <div class="commit-item__user__name">
          <a [href]="userURL" target="_blank" title="View GitHub profile"><b [innerText]="userName"></b></a>{{' '}}
          <a [href]="commitURL" target="_blank" title="View commit on GitHub">committed on <i>{{ date | date: 'MMM d, y' }}</i></a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    a {
      color: unset;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .commit-item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      border: 1px #aab0b7 solid;
      color: #444d56;
      font-family: Helvetica,Arial,sans-serif;
      position: relative;
      overflow-wrap: break-word;
      margin-top: 16px;
      margin-bottom: 16px;
      border-radius: 5px;
    }
    .commit-item:hover {
      background: #f6fbff;
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
  @Input() commitURL: string;
  @Input() userURL: string;

  constructor() { }

  ngOnInit() {
  }

}
