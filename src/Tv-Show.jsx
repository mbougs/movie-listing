import axios from 'axios';
import { Fake_Populars } from './Fake_Data';

// const API_KEY = import.meta.env.VITE_MY_KEY;
const type = 'tv/popular';

export class TVShowAPI {
    static async fetchPopulars() {
        // const response = await axios.get(`https://api.themoviedb.org/3/${type}?api_key=${API_KEY}`);
        // console.log(response.data.results);
        // return response.data.results;
        return Fake_Populars
    }
}