import { takeLatest, put, call, all } from 'redux-saga/effects';
import { GitService } from '../../services/GitService';
import env from '../../config';

// função reponsavel por ações de chamadas de busca de usuários
function* getUser(action) {
  try {
    yield put({ type: env.GIT_REQUEST_USER });
    const user = yield call(GitService.getUserFromServer, action.userName);
    yield put({ type: env.GIT_SUCCESS_USER, data: user.data });
  } catch (err) {
    yield put({ type: 'GIT_FAILURE_USER' });
  }
}

// função reponsavel por ações de chamadas de busca de repositório
function* getUserRepos(action) {
  try {
    yield put({ type: env.GIT_REQUEST_USER_REPOS });
    const repos = yield call(GitService.getUserReposFromServer, action.userName);
    yield put({ type: env.GIT_SUCCESS_USER_REPOS, data: repos.data });
  } catch (err) {
    yield put({ type: env.GIT_FAILURE_USER_REPOS });
  }
}

// interceptador de açoes
export default function* root() {
  yield all([
    takeLatest(env.GET_USER, getUser),
    takeLatest(env.GET_USER_REPOS, getUserRepos),
  ]);
}
