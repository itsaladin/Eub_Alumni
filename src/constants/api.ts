// root api domain.

const protocol = 'https://';

const host = 'bm.starit.design';

// const endpoint = '/wp-json/';

export const baseUrl = `${protocol + host}/`;

export const baseApiUrl = `${protocol + host}/api/`;

export const signInUrl = `${baseApiUrl}auth/login`;
export const reqOtpUrl = `${baseApiUrl}wppl/v1/otp`;
