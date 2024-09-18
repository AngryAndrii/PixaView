import axios from 'axios';
import { Params, resData } from './types';

const BASE_URL: string = import.meta.env.VITE_BASE_URL;
const API_KEY: string = import.meta.env.VITE_API_KEY;

const fetchImage = async (
  query: string,
  page: number
): Promise<resData[] | null> => {
  const paramsForSearch: Params = {
    orientation: 'horizontal',
    per_page: 20,
    image_type: 'photo',
    key: API_KEY,
    q: `${query}`,
    page: `${page}`,
  };

  try {
    const resp = await axios.get(`${BASE_URL}?`, {
      params: paramsForSearch,
    });
    return resp.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return null;
  }
};

export default fetchImage;
