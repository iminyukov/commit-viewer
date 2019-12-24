export const API_URL = `https://api.github.com`;

export const getEndpointCommits = function (user: string, project: string) {
  return `${API_URL}/repos/${user}/${project}/commits`;
};
