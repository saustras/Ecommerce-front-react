const { ENV } = require("@/utils/constants");

export class Auth {
    async register(data) {
        try {
            data.role = 1
            const url =`${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`
            const params = {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(url, params);

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message);
            }
            return await response.json();
        } catch (error) {s
            throw error;
        }
    }

    async login(data) {
        try {
          const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
          const params = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
    
          const response = await fetch(url, params);
          
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message);
            }
            return await response.json();
    
          return result;
        } catch (error) {
          throw error;
        }
      }
}