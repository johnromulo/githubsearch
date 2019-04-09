import { runSaga } from 'redux-saga';
import { GitService } from '../../../services/GitService';
import { getUser, getUserRepos } from '../gitSaga';
import { actionGetUser, actionGetUserRepos } from '../../actions/gitActions';
import env from '../../../config';


describe("Testing get User ", async () => {
  afterEach(() => {
    jest.clearAllMocks()
  });
  test('should load user success', async () => {
    const dispatchedActions = [];

    const mockedUser = { data: {} };
    const returnActionSaga = [
      { type: env.GIT_REQUEST_USER },
      {
        ...mockedUser,
        type: env.GIT_SUCCESS_USER,
      }
    ];

    GitService.getUserFromServer = jest.fn(() => Promise.resolve(mockedUser));

    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
    }

    await runSaga(fakeStore, getUser, actionGetUser('john')).done;
    expect(GitService.getUserFromServer.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(returnActionSaga);
  });

  test('should load user repos error', async () => {
    const dispatchedActions = [];

    const returnActionSaga = [
      { type: env.GIT_REQUEST_USER },
      { type: env.GIT_FAILURE_USER }
    ];

    GitService.getUserFromServer = jest.fn(() => Promise.reject());

    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
    }

    await runSaga(fakeStore, getUser, actionGetUser('john')).done;
    expect(GitService.getUserFromServer.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(returnActionSaga);
  });
});


describe("Testing get UserRepos ", async () => {
  afterEach(() => {
    jest.clearAllMocks()
  });
  test('should load userRepos success', async () => {
    const dispatchedActions = [];

    const mockedUser = { data: {} };
    const returnActionSaga = [
      { type: env.GIT_REQUEST_USER_REPOS },
      {
        ...mockedUser,
        type: env.GIT_SUCCESS_USER_REPOS,
      }
    ];

    GitService.getUserReposFromServer = jest.fn(() => Promise.resolve(mockedUser));

    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
    }

    await runSaga(fakeStore, getUserRepos, actionGetUserRepos('john')).done;
    expect(GitService.getUserReposFromServer.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(returnActionSaga);
  });

  test('should load user repos error', async () => {
    const dispatchedActions = [];

    const returnActionSaga = [
      { type: env.GIT_REQUEST_USER_REPOS },
      { type: env.GIT_FAILURE_USER_REPOS }
    ];

    GitService.getUserReposFromServer = jest.fn(() => Promise.reject());

    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
    }

    await runSaga(fakeStore, getUserRepos, actionGetUserRepos('john')).done;
    expect(GitService.getUserReposFromServer.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(returnActionSaga);
  });
});


