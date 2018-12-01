import env from '../../config';

export function actionGetUser(userName) {
  return { type: env.GET_USER, userName };
}

export function actionGetUserRepos(userName) {
  return { type: env.GET_USER_REPOS, userName };
}
