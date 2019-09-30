import axios from 'axios';

export const get = url => axios.get(url);

export const post = ({ url, data }) => axios.post(url, data);

export const put = ({ url, data }) => axios.put(url, data);

export const del = ({ url, id }) => axios.delete(`${url}/${id}`);
