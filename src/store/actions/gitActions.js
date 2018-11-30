export function actionGetUser(userName) {
  return { type: 'GET_USER', userName };
}

export function actionGetUserRepos(userName) {
  return { type: 'GET_USER_REPOS', userName };
}
