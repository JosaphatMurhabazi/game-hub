import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  params: {
    key: '88f75bd4a5b0431eb2c8795f085d5ebb',
  },
  baseURL: 'https://api.rawg.io/api',
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>(this.endpoint + '/' + id);
    return res.data;
  };
}

export default APIClient;
