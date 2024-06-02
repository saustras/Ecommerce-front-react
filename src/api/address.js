import { ENV, authFetch } from "@/utils";

export class Address {
    async create(data, userId) {
      try {
        data.user =userId
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        console.log('params', params)
        const response = await authFetch(url, params);
        console.log(response)
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          return await response.json();
  
      } catch (error) {
        throw error;
      }
    }
    async getAll(userId) {
      try {
        const filters = `filter.user.id=${userId}`;
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;
  
        const response = await authFetch(url);
        console.log(response)
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          return await response.json();
      } catch (error) {
        throw error;
      }
    }
  
    async update(data, addressId) {
      try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
        const params = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await authFetch(url, params);
        console.log(response)
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          return await response.json();
      } catch (error) {
        throw error;
      }
    }
  
    async delete(addressId) {
      try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
        const params = {
          method: "DELETE",
        };
  
  
        const response = await authFetch(url, params);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          return await response.json();
      } catch (error) {
        throw error;
      }
    }
}