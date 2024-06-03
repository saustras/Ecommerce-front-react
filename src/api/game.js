import { ENV } from "@/utils";

export class Game {
  async getLastPublished() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}/1`;

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, platformId = null }) {
    try {
      const filterPlatform =
        platformId && `filter.platform.id=${platformId}`;

        console.log(filterPlatform)

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filterPlatform}&limit=${limit}`;
      console.log(['url', url])
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getGamesByPlatformSlug(slug, page) {
    try {
      const filters = `filter.platform.slug=${slug}`;
      const pagination = `page=${page}&limit=30`;
      const urlParams = `${filters}&${pagination}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;
      console.log(url)

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }

  async searchGames(text, page) {
    try {
      const filters = `filter.title=$ilike:${text}`;
      const pagination = `page=${page}&limit=30`;
      const urlParams = `${filters}&${pagination}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filters = `filter.slug=${slug}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filters}`;
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
      return  await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getGameById(id) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}/${id}`;
      const response = await fetch(url);
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
