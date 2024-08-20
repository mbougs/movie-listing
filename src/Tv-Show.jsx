import axios from 'axios';
import { config } from '../config';

const API_KEY = config.MY_KEY;
const type = 'tv/popular';

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}?api_key=${API_KEY}`);
        console.log(response.data.results[0]);
        
        return response.data.results;
    }
}