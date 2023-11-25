import axios from 'axios'

const API_KEY = '71acfba8e0msh290fb3bc92ff3cap15f386jsncacfe2e7d6a4'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/${query}`, {
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    });
    return data;
}