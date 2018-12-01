//import { delay } from 'redux-saga';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { GitService } from '../../services/GitService';

function* getUser(action) {
  try {
    yield put({ type: 'GIT_REQUEST_USER' });
    const user = yield call(GitService.getUserFromServer, action.userName);
    yield put({ type: 'GIT_SUCCESS_USER', data: user.data });
  } catch (err) {
    yield put({ type: 'GIT_FAILURE_USER' });
  }
}

function* getUserRepos(action) {
  try {
    yield put({ type: 'GIT_REQUEST_USER_REPOS' });
    const repos = yield call(GitService.getUserReposFromServer, action.userName);
    yield put({ type: 'GIT_SUCCESS_USER_REPOS', data: repos.data });
  } catch (err) {
    yield put({ type: 'GIT_FAILURE_USER_REPOS' });
  }
}

export default function* root() {
  yield all([
    takeLatest('GET_USER', getUser),
    takeLatest('GET_USER_REPOS', getUserRepos),
  ]);
}
