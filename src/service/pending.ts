import { api_key, pendingUserUrl } from '@/constants/api';

export const getPending = async () => {
  try {
    const res = await fetch(pendingUserUrl + api_key, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
