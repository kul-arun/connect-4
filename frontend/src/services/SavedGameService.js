import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/saved-games";

export const listSavedGameItems = () => axios.get(REST_API_BASE_URL);

export const getSavedGameItem = (gameId) =>
  axios.get(REST_API_BASE_URL + "/" + gameId);

export const createSavedGameItem = (gameItem) =>
  axios.post(REST_API_BASE_URL, gameItem);

export const updateSavedGameItem = (gameId, gameItem) =>
  axios.put(REST_API_BASE_URL + "/" + gameId, gameItem);

export const deleteSavedGameItem = (gameId) =>
  axios.delete(REST_API_BASE_URL + "/" + gameId);
