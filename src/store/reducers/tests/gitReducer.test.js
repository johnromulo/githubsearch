import { gitReducer, countStar, oderStar } from '../gitReducer';
import env from '../../../config';


describe("Testing Git Reducer DEFAUT STATE", async () => {

  test('select action DEFAUT STATE', () => {
    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }

    expect(gitReducer(INITIAL_STATE, {})).toEqual({
      user: {},
      repos: [],
      loading: false,
      erros: false
    })
  });
});

describe("Testing Git Reducer User Actions ", async () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  test('select action GIT_REQUEST_USER', () => {
    const actionRequet = {
      type: env.GIT_REQUEST_USER
    }
    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }

    expect(gitReducer(INITIAL_STATE, actionRequet)).toEqual({
      user: {},
      repos: [],
      loading: true,
      erros: false
    })
  });

  test('select action GIT_SUCCESS_USER', () => {
    const actionRequet = {
      type: env.GIT_SUCCESS_USER,
      data: { user: "ok" }
    }

    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }
    // return { ...state, loading: true };
    expect(gitReducer(INITIAL_STATE, actionRequet)).toEqual({
      user: { user: "ok" },
      repos: [],
      loading: false,
      erros: false
    })
  })

  test('select action GIT_FAILURE_USER', () => {
    const actionRequet = {
      type: env.GIT_FAILURE_USER,
    }

    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }
    // return { ...state, loading: true };
    expect(gitReducer(INITIAL_STATE, actionRequet)).toEqual({
      user: {},
      repos: [],
      loading: false,
      erros: true
    })
  })

});



describe("Testing Git Reducer UserRepos Actions ", async () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  test('select action GIT_REQUEST_USER_REPOS', () => {
    const actionRequet = {
      type: env.GIT_REQUEST_USER_REPOS
    }
    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }

    expect(gitReducer(INITIAL_STATE, actionRequet)).toEqual({
      user: {},
      repos: [],
      loading: true,
      erros: false
    })
  });

  test('select action GIT_SUCCESS_USER_REPOS', () => {

    const mockRepo = [{
      repo: 2,
      stargazers_count: 2,
    },
    {
      repo: 1,
      stargazers_count: 1,
    },
    {
      repo: 3,
      stargazers_count: 3,
    }];

    const actionRequet = {
      type: env.GIT_SUCCESS_USER_REPOS,
      data: mockRepo
    }

    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }

    const returnAction = gitReducer(INITIAL_STATE, actionRequet);

    expect(returnAction).toEqual({
      user: { star_all_repos: 6 },
      repos: mockRepo,
      loading: false,
      erros: false
    })

    expect(returnAction.repos.length).toBe(3)

    expect(returnAction.repos[0]).toEqual({
      repo: 3,
      stargazers_count: 3,
    })
    expect(returnAction.repos[2]).toEqual({
      repo: 1,
      stargazers_count: 1,
    })
  })

  test('select action GIT_FAILURE_USER_REPOS', () => {
    const actionRequet = {
      type: env.GIT_FAILURE_USER_REPOS,
    }

    const INITIAL_STATE = {
      user: {},
      repos: [],
      loading: false,
      erros: false
    }

    expect(gitReducer(INITIAL_STATE, actionRequet)).toEqual({
      user: {},
      repos: [],
      loading: false,
      erros: true
    });
  });


  describe("Testing Git Reducer utils functions", async () => {
    afterEach(() => {
      jest.clearAllMocks()
    });
    const mockRepo = [{
      repo: 2,
      stargazers_count: 2,
    },
    {
      repo: 4,
      stargazers_count: 2,
    },
    {
      repo: 1,
      stargazers_count: 1,
    },
    {
      repo: 3,
      stargazers_count: 3,
    }];

    test('testing countStar', () => {
      expect(mockRepo.reduce(countStar, 0)).toBe(8);
    });

    test('testing oderStar', () => {
      const orderRpos = mockRepo.sort(oderStar);

      expect(orderRpos.length).toBe(4)
      expect(orderRpos[0]).toEqual({
        repo: 3,
        stargazers_count: 3,
      });
      expect(orderRpos[3]).toEqual({
        repo: 1,
        stargazers_count: 1,
      });
    });
  });
});
