import { api_key, deleteUserURL } from '@/constants/api';

// eslint-disable-next-line consistent-return
export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${deleteUserURL + id}?api_key=${api_key}`, {
      method: 'DELETE',
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
