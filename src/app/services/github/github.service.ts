import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {IGetCommitResponse, IGithubCommit, IGithubProject} from '../../shared/model';
import {getEndpointProject, getEndpointCommits, formGetCommitResponse} from './helpers';
import {COMMITS_PER_PAGE} from './constants';

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
