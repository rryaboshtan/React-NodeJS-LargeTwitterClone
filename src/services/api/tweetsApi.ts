import axios from "axios";
import { setAddFormState } from "../../store/ducks/tweets/actionCreators";
import { AddFormState, Tweet, TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets?_sort=id&_order=desc')
            .then(({data}) => data)
            .catch(error => console.log(error));
    },
    fetchTweetData(id:string): Promise<Tweet> {
        return axios.get('/tweets?_id=' + id)
            .then(({ data }) => data[0])
            .catch(error => console.log('ERROR', error));
    },
    addTweet(payload: Tweet): Promise<Tweet> {
        return axios.post('/tweets', payload)
            .then(({ data }) => data)
            .catch(error => {
                console.log('AXIOS', error);
                setAddFormState(AddFormState.ERROR)
        })   
    }
}
