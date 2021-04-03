import axios from "axios";
import {Tweet, TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets')
            .then((response) => {
                const data = response.data;
                return data;
            })
            .catch(error => console.log(error));
    },
    fetchTweetData(id:string): Promise<Tweet> {
        return axios.get('/tweets?_id=' + id)
            .then (response => {
                const data = response.data;
                console.log('response.data[0]', data[0])

                return data[0];
            })
            .catch(error => console.log(error));
    }
}