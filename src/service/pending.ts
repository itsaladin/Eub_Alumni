import { api_key, pendingUserUrl } from '@/constants/api';

export interface PendingResponse {
  id: string;
  stdId: string;
  name: string;
  company: string;
  designation: string;
  batch: string;
  roll: string;
  department: string;
  passyear: number;
  email: string;
  phone: string;
  blood: string;
  password: string;
  submission: string;
  submissionTitle: string;
  joined: string;
  updated: string;
  emailverify: boolean;
  phoneverify: boolean;
  scopes?: string[] | null;
}

export const getPending = async () => {
  try {
    const res = await fetch(`${pendingUserUrl}api_key=${api_key}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response: PendingResponse = await res.json();
    console.log(JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    return console.error(error);
  }
};
