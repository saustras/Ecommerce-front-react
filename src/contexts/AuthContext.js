import { Token } from '@/api/token';
import { User } from '@/api/user'; 
import { createContext, useEffect, useState } from 'react'

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const storedToken = tokenCtrl.getToken();

            if (!storedToken) {
                logout();
                setLoading(false);
                return;
            }

            if (tokenCtrl.hasExpiredToken(storedToken)) {
                logout();
            } else {
                await login(storedToken);
            }
        })();
    }, []);
    

    async function login(authToken) {
        try {
            tokenCtrl.setToken(authToken);
            const tokenDecode = tokenCtrl.decodeToken(authToken);
            const response = await userCtrl.getUser(tokenDecode.sub);
            setUser(response);
            setToken(authToken);
            setLoading(false);
            console.log("User:", response);
        } catch (error) {
            console.error("Login error:", user);
            setLoading(false);
        }
    }

    function logout() {
        tokenCtrl.removeToken();
        setUser(null);
        setToken(null);
    }

    const updateUser =(key, value) => {
        setUser({
            ...user,
            [key]:value
        });
    }


    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };
    if (loading) return null;

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}