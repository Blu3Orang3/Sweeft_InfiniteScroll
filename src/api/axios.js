import axios from 'axios';

export const api = axios.create({
  baseURL: 'sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/',
});

export const getUserList = async (page = 1, size, options = {}) => {
  const response = await api.get(`/user/${page}/${size}`, options);
  return response;
};
export const getUserFriendsList = async (
  userId,
  page = 1,
  size,
  options = {}
) => {
  const response = await api.get(
    `/user/${userId}/friends/${page}/${size}`,
    options
  );
  return response;
};
export const getUser = async (userId = 1, options = {}) => {
  const response = await api.get(`/user/${userId}/`, options);
  return response;
};
