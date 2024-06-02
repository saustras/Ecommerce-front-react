import { ENV } from '@/utils';
import {jwtDecode} from 'jwt-decode';

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    }

    hasExpiredToken(token) {
        const tokenDecoded = this.decodeToken(token);
        const expireDate = tokenDecoded.exp * 1000;
        const currentDate = new Date().getTime();
        return currentDate > expireDate;
    }

    decodeToken(token) {
        return jwtDecode(token);
    }
}