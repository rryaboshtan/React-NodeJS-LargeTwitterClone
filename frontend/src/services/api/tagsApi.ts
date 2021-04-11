import axios from "axios";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get('/tags')
            .then((response) => {
                const data = response.data;
                return data;
            })
            .catch(error => console.log(error));
    }
}