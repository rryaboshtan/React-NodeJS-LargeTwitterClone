import { createStore, compose, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { TweetsState } from './ducks/tweets/contracts/state';
import { rootReducer } from './rootReducer';
import rootSaga from './saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
    tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

