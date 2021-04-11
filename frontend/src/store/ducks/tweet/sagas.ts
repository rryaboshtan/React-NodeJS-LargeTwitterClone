import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweetLoadingState, setTweetData } from './actionCreators';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';
import { LoadingState } from './contracts/state';

export function* fetchTweetDataRequest({payload}: FetchTweetDataActionInterface): any  {

  try {
    const data = yield call(TweetsApi.fetchTweetData, payload);

    yield put(setTweetData(data));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
