import publicFetch from '@/api/utils/public-fetch';
import { signInUrl, signUpUrl } from '@/constants/api';

export const signUp = async (
  blood: string,
  passyear: number,
  department: string,
  roll: string,
  batch: string,
  designation: string,
  company: string,
  stdId: string,
  password: string,
  name: string,
  phone: string,
  email: string,
) => {
  try {
    const data = {
      blood,
      passyear,
      department,
      roll,
      batch,
      designation,
      company,
      stdId,
      password,
      name,
      phone,
      email,
    };
    const res = await publicFetch(signUpUrl, data, undefined, 'POST');
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signIn = async (identity: string, password: string) => {
  try {
    const data = {
      identity,
      password,
    };
    const res = await publicFetch(signInUrl, data, undefined, 'POST');
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};
