import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const CREATE_VIDEOGAMES = "CREATE_VIDEOGAMES";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const RESET = "RESET";
export const RESET_BYID = "RESET_BYID";
export const GET_BYID = "GET_BYID";
export const GET_GENRE = "GET_GENRE";
export const ORDER ="ORDER"
export const FILTER ="FILTER"
export const getgames = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/videogames").then((response) => {
      dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    });
  };
};
export const getById = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogames/${id}`).then((response) => {
      dispatch({ type: GET_BYID, payload: response.data });
    });
  };
};
export const searchGames = (name) => {
  return { type: SEARCH_GAMES, payload: name };
};
export const RESETs = () => {
  return { type: RESET };
};
export const resetByID = () => {
  return { type: RESET_BYID };
};
export const getGenre = () => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/genres`).then((response) => {
      dispatch({ type: GET_GENRE, payload: response.data });
    });
  };
};
export const nameA_Z = (orden) => {
  return { type: ORDER, payload : orden};
};
export const filter = (filtro) => {
  return { type: FILTER, payload : filtro};
};
