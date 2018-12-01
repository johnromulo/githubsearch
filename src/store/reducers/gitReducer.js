
const INITIAL_STATE = {
  user: {},
  repos: [],
  loading: false,
  erros: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'GIT_SUCCESS_USER':
      return { user: action.data, repos: state.repos, loading: false, error: false }
    case 'GIT_FAILURE_USER':
      return { user: {}, repos: state.repos, loading: false, error: true };
    case 'GIT_REQUEST_USER':
      return { ...state, loading: true };
    case 'GIT_SUCCESS_USER_REPOS':
      const star_all_repos = action.data.reduce(countStar, 0);
      const userNew = Object.assign({}, state.user, { star_all_repos });
      return { user: userNew, repos: action.data.sort(oderStar), loading: false, error: false }
    case 'GIT_FAILURE_USER_REPOS':
      return { user: state.user, repos: [], loading: false, error: true };
    case 'GIT_REQUEST_USER_REPOS':
      return { ...state, loading: true };
    default:
      return state;
  }
}

const countStar = (total, item) => total + item.stargazers_count;

const oderStar = (a, b) => {
  if (a.stargazers_count > b.stargazers_count) return -1;
  if (a.stargazers_count < b.stargazers_count) return 1;
  return 0;
}
