import { Token } from '@/api/token';

export async function authFetch(url, params) {
  try {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logout = () => {
      tokenCtrl.removeToken();
      window.location.replace("/");
    };

    if (!token || tokenCtrl.hasExpiredToken(token)) {
      logout();
      return;
    }

    const paramsWithAuth = {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(paramsWithAuth)
    const response = await fetch(url, paramsWithAuth);
    
    return response
  } catch (error) {
    console.error("Error in authFetch:", error);
    throw error;
  }
}