import env from '../../config';

// Ações de redux.
export function actionGetUser(userName) {
  return { type: env.GET_USER, userName };
}

export function actionGetUserRepos(userName) {
  return { type: env.GET_USER_REPOS, userName };
}
