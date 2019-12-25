import { Injectable } from '@angular/core';
import { getEndpointProject, getEndpointCommits } from './helpers';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGithubCommit, IGithubProject} from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  getProject(user: string, project: string): Observable<IGithubProject> {
    return this.http.get<IGithubProject>(getEndpointProject(user, project))
  }

  getCommits(user: string, project: string): Observable<IGithubCommit[]> {
    return this.http.get<IGithubCommit[]>(getEndpointCommits(user, project));
  }

}
