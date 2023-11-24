import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL,
  timeout: 1000,
});

const createEndpoint = (endpoint: string): string => {
  if (endpoint.startsWith('http')) return endpoint;
  return baseURL + endpoint;
};

const createHeaders = (config?: object): AxiosRequestConfig<any> => {
  return {
    headers: {
      Authorization: 'TODO set token',
      ...(config ?? {}),
    },
  };
};

export const get = async (endpoint: string) => {
  try {
    const headers = createHeaders();
    const response = await apiClient.get(createEndpoint(endpoint), headers);
    return response.data;
  } catch (error) {
    console.error('get error:', error);
  }
};

export const post = async (
  endpoint: string,
  data: any,
  config?: object,
) => {
  try {
    const headers = createHeaders(config);
    const response = await apiClient.post(
      createEndpoint(endpoint),
      data,
      headers,
    );
    return response.data;
  } catch (error) {
    console.error('post error:', error);
  }
};
