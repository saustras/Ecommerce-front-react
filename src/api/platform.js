import { ENV } from "@/utils";

export class Platform {
  async getAll() {
    try {

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}`;

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const result = await response.json()

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filters = `filters.slug=${slug}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${filters}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}
