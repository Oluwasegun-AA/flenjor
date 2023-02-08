import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const baseUrl = 'https://baseurl';

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token: string = process.env.FAKEJSONTOKEN || 'Xd00zQlISp8G7xcmERPu2A';

export const Get = async (route: string) => {
  try {
    const response: AxiosResponse = await request.get(route);
    return response.data;
  } catch (error: any) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (data: Record<string, unknown>, route = '') => {
  try {
    const response: AxiosResponse = await request.post(route, { token, data });
    return response.data;
  } catch (error: any) {
    return error.response ? error.response.data : error;
  }
};

export const Patch = async (data: Record<string, unknown>, route = '') => {
  try {
    const response: AxiosResponse = await request.patch(route, { token, data });
    return response.data;
  } catch (error: any) {
    return error.response ? error.response.data : error;
  }
};
