export interface IGithubProject {
  full_name: string,
  description: string,
  created_at: string,
  language: string,
  url: string,
  owner: {
    id: number,
    login: string,
    avatar_url: string
  }
}

export interface IGithubCommit {
  sha: string,
  html_url: string,
  committer: {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
  },
  commit: {
    message: string,
    author: {
      name: string,
      email: string,
      date: string
    }
  }
}
