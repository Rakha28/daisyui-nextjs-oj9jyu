// services/api.js
import axios from 'axios';

class Api {
  async getAllAnime() {
    try {
      const response = await axios.get('/api/getAllAnime');
      return response.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  }

  async getAnime(animeId) {
    try {
      const response = await axios.get(`/api/getAnime/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime with ID ${animeId}:`, error);
      throw error;
    }
  }

  async getAnimeDetails(animeId) {
    try {
      const response = await axios.get(`/api/getAnimeDetails/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime details with ID ${animeId}:`, error);
      throw error;
    }
  }

  async getAnimeReviews(animeId) {
    try {
      const response = await axios.get(`/api/getAnimeReviews/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime reviews with ID ${animeId}:`, error);
      throw error;
    }
  }

  async getAnimeSynopsis(animeId) {
    try {
      const response = await axios.get(`/api/getAnimeSynopsis/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime synopsis with ID ${animeId}:`, error);
      throw error;
    }
  }

  async getAnimeImage(animeId) {
    try {
      const response = await axios.get(`/api/getAnimeImage/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime image with ID ${animeId}:`, error);
      throw error;
    }
  }

  async getComments(animeId) {
    try {
      const response = await axios.get(`/api/getComments/${animeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching comments with anime ID ${animeId}:`, error);
      throw error;
    }
  }
}

const apiInstance = new Api(); // Create an instance of the Api class

export default apiInstance;
