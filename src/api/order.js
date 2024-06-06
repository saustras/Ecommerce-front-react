import { ENV, authFetch } from "@/utils";

export class Order {
  async getAll(userId) {
    try {
      const filters = `filter.user.id=${userId}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENY_ORDER}?${filters}`;
      console.log(url)
      const response = await authFetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }
}
