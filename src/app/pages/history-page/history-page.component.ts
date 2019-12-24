import { Component, OnInit } from '@angular/core';
import { GITHUB } from '../../shared/constants';
import {GithubService} from '../../services/github/github.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  githubUser = GITHUB.user;
  githubProject = GITHUB.project;

  commits$ = this.github.getCommits(this.githubUser, this.githubProject);
  project$ = this.github.getProject(this.githubUser, this.githubProject);

  constructor(private github: GithubService) { }

  ngOnInit() {
  }

}
