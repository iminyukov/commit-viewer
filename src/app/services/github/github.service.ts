import { Injectable } from '@angular/core';
import {getEndpointProject, getEndpointCommits, formGetCommitResponse} from './helpers';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGithubCommit, IGithubProject} from '../../shared/models';
import {map} from 'rxjs/operators';

export const COMMITS_PER_PAGE = 5;
export interface IGetCommitResponse { isLastPage: boolean, commits: IGithubCommit[] }

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  getProject(user: string, project: string): Observable<IGithubProject> {
    return this.http.get<IGithubProject>(getEndpointProject(user, project))
  }

  getCommits(user: string, project: string, page: number): Observable<IGetCommitResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', COMMITS_PER_PAGE.toString());

    return this.http.get<IGithubCommit[]>(getEndpointCommits(user, project), { params })
      .pipe(
        map(formGetCommitResponse)
      );
  }

}
