import { ENV, authFetch } from "@/utils";

export class User {
    async getUser(id) {
        try {
            const url =`${ENV.API_URL}/${ENV.ENDPOINTS.GETUSER}/ ${id}`
            const response = await authFetch(url);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
              }

            const result = await response.json()

            return result.data;
        } catch (error) {s
            throw error;
        }
    }

}