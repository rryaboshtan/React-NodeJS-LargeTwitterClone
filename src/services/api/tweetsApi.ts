import axios from "axios";
import {TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets')
            .then((response) => {
                const data = response.data;
                // console.log("DATA ", data)
                return data;
            })
            .catch(error => console.log(error));
    }
}