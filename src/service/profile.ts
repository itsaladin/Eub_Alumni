import { api_key, approvedUsers, studentProfileUrl } from '@/constants/api';
import { PendingResponse } from '@/service/pending';

export interface StudentProfile {
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

export const getProfile = async (token: string) => {
  try {
    console.log(token);

    const res = await fetch(studentProfileUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const { details }: { details: StudentProfile } = await res.json();

    return details;
  } catch (error) {
    return console.error(error);
  }
};

export const getApprovedUser = async () => {
  try {
    const res = await fetch(`${approvedUsers}api_key=${api_key}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response: PendingResponse[] = await res.json();
    console.log(JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    return console.error(error);
  }
};
