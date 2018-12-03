import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import gitSaga from './sagas/gitSaga';

const sagaMiddleware = createSagaMiddleware();

// defidindo middleware para o redux.
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(gitSaga);

export default store;
