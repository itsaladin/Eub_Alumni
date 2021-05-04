import { updateUserUrl } from '@/constants/api';

// eslint-disable-next-line consistent-return
export const updateUser = async (
  token: string | string[] | undefined,
  name: string,
  company: string,
  designation: string,
  batch: string,
  roll: string,
  department: string,
  passingYear: number,
  blood: string,
  submissionTitle: string,
  // eslint-disable-next-line consistent-return
) => {
  try {
    console.log(
      name,
      company,
      designation,
      batch,
      roll,
      department,
      passingYear,
      blood,
      submissionTitle,
    );

    const res = await fetch(`${updateUserUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        submissionTitle,
        blood,
        passyear: passingYear,
        department,
        roll,
        batch,
        designation,
        company,
        name,
      }),
    });
    const response = await res.json();
    console.log(JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error(error);
  }
};
