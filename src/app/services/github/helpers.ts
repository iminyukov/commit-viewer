import {IGithubCommit} from '../../shared/models';
import {IGetCommitResponse} from './github.service';

export const API_URL = `https://api.github.com`;

export const getEndpointProject = function (user: string, project: string): string {
  return `${API_URL}/repos/${user}/${project}`;
};

export const getEndpointCommits = function (user: string, project: string): string {
  return `${API_URL}/repos/${user}/${project}/commits`;
};

export const formGetCommitResponse = function (commits: IGithubCommit[]): IGetCommitResponse {
  return {
    isLastPage: commits.length === 0,
    commits
  }
};
