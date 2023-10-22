import axios from 'axios';

const baseURL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL,
  timeout: 1000,
});

const createEndpoint = (endpoint: string): string => {
  if (endpoint.startsWith('http')) return endpoint;
  return baseURL + endpoint;
};

export const get = async (endpoint: string) => {
  try {
    const response = await apiClient.get(createEndpoint(endpoint));
    return response.data;
  } catch (error) {
    console.error('get error:', error);
  }
};

export const post = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(createEndpoint(endpoint), data);
    return response.data;
  } catch (error) {
    console.error('post error:', error);
  }
};
