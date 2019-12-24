import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  commits = [
    {
      message: 'Add some functions',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'AFSdsdfasdfsadf',
      userName: 'frank123',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: '21342314123',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'Add some functions',
      userName: 'sss21344',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'ffasfasdfsafdas',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'Add some functions',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'AFSdsdfasdfsadf',
      userName: 'frank123',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: '21342314123',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'Add some functions',
      userName: 'sss21344',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    },
    {
      message: 'ffasfasdfsafdas',
      userName: 'u.user',
      avatarURL: 'https://via.placeholder.com/150',
      date: new Date()
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
