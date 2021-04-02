import { createSelector } from "reselect";
import { RootState } from "../../store";
import { TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;
export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);
// export const selectTweetsItems = (state: RootState) => selectTweets(state).items;

export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState;
