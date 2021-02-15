import publicFetch from '@/api/utils/public-fetch';
import { signInUrl } from '@/constants/api';

export interface UserResponse {
  token: string;
  id: number;
  email: string;
  nicename: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phone: string;
}

interface SignInResponse {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data?: UserResponse;
}

export const signIn = async (identity: string, password: string) => {
  try {
    const data = {
      identity,
      password,
    };
    const res = await publicFetch(signInUrl, data, undefined, 'POST');
    const json: SignInResponse = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    const excep: SignInResponse = {
      success: false,
      statusCode: 417,
      code: 'internal_application_error_signin',
      : JSON.stringify(error),
    };
    return excep;
  }
};
