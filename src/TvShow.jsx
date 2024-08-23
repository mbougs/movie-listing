import axios from 'axios';
import { Fake_Populars, Fake_Recommendations } from './Fake_Data';

const API_KEY = import.meta.env.VITE_MY_KEY;
const type = 'tv/popular';

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}?api_key=${API_KEY}`);
        return response.data.results;
        // return Fake_Populars
    }
    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}/recommendations?api_key=${API_KEY}`);
        return response.data.results;
        
        // return Fake_Recommendations

    }
    static async fetchByTitle(title) {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${title}`);
        return response.data.results;
        
        // return Fake_Recommendations

    }
}