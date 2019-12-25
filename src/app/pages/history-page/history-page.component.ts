import { Component, OnInit } from '@angular/core';
import { GITHUB } from '../../shared/constants';
import {GithubService} from '../../services/github/github.service';
import {IGithubCommit} from '../../shared/model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  githubUser = GITHUB.user;
  githubProject = GITHUB.project;
  project$ = this.github.getProject(this.githubUser, this.githubProject);

  commits: IGithubCommit[] = [];
  currentPage = 0;
  isPageLast = false;
  isPageLoading = false;

  constructor(private github: GithubService) { }

  async ngOnInit() {
    await this.fetchCommits(this.currentPage+1);
  }

  async fetchCommits(page: number) {
    this.isPageLoading = true;

    try {
      const { commits, isLastPage } = (await this.github.getCommits(this.githubUser, this.githubProject, page).toPromise());
      this.commits = [...this.commits, ...commits];
      this.isPageLast = isLastPage;

      if (!isLastPage) {
        this.currentPage = page;
      }
    } catch {
      this.isPageLoading = false;
    }

    this.isPageLoading = false;

  }

  async fetchNextPage() {
    await this.fetchCommits(this.currentPage + 1);
  }



}
