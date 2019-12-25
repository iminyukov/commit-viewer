import {IGetCommitResponse, IGithubCommit} from '../../shared/model';
import {API_URL, COMMITS_PER_PAGE} from './constants';

export const getEndpointProject = function (user: string, project: string): string {
  return `${API_URL}/repos/${user}/${project}`;
};

export const getEndpointCommits = function (user: string, project: string): string {
  return `${API_URL}/repos/${user}/${project}/commits`;
};

export const formGetCommitResponse = function (commits: IGithubCommit[]): IGetCommitResponse {
  return {
    isLastPage: commits.length < COMMITS_PER_PAGE,
    commits
  }
};
