
const INITIAL_STATE = {
  data: {},
  loading: false,
  erros: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'GIT_SUCCESS_USER':
      return { data: action.data, loading: false, error: false }
    case 'GIT_FAILURE_USER':
      return { data: {}, loading: false, error: true };
    case 'GIT_REQUEST_USER':
      return { ...state, loading: true };
    default:
      return state;
  }
}
