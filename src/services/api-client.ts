import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  params: {
    key: '88f75bd4a5b0431eb2c8795f085d5ebb',
  },
  baseURL: 'https://api.rawg.io/api',
});
