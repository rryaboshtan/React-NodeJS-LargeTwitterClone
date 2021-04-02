import axios from "axios";
// import {TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    fetchTweets() {
        return axios.get('https://trycode.pw/c/RLW4I.json')
            .then((response) => {
                const data = response.data;
                // console.log("DATA ", data)
                return data;
            })
            .catch(error => console.log(error));
    }
}