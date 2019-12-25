#CommitViewer
The project that allows tracking the repository commits based on [GitHub API.](http://https://developer.github.com/v3/ "GitHub API.")

## Set up the project
1. Install dependencies `npm install`
2. Go to the constants file `src/app/shared/constants.ts` and point `user` and `project` constants:

        export const GITHUB = {
          user: 'YOUR_USER_NAME',
          project: 'YOUR_PROJECT_REPO_NAME'
        };

## Start the project
Run `npm start` and navigate to `http://localhost:4200/`.
