import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/scoreboard";

export const listScoreboardItems = () => axios.get(REST_API_BASE_URL);

export const createScoreboardItem = (scoreboardItem) =>
  axios.post(REST_API_BASE_URL, scoreboardItem);

export const deleteScoreboardItem = (gameId) =>
  axios.delete(REST_API_BASE_URL + "/" + gameId);
