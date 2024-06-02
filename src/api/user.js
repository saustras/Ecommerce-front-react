import { ENV, authFetch } from "@/utils";

export class User {
    async getUser(userId) {
        try {
            const url =`${ENV.API_URL}/${ENV.ENDPOINTS.USER}/ ${userId}`
            const response = await authFetch(url);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData);
              }

            const result = await response.json()

            return result.data;
        } catch (error) {s
            throw error;
        }
    }

    async updateUser(userId,data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}/ ${userId}`;
            const params = {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            };
      
            const response = await authFetch(url, params);
            
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData);
              }
              return await response.json();
          } catch (error) {
            throw error;
          }
    }

}