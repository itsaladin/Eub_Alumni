import { api_key, approveUserUrl } from '@/constants/api';

// eslint-disable-next-line consistent-return
export const approveUser = async (id: string) => {
  try {
    const res = await fetch(`${approveUserUrl}${id}?api_key=${api_key}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    console.log(JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error(error);
  }
};
