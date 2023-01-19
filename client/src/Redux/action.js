import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const CREATE_VIDEOGAMES = "CREATE_VIDEOGAMES";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const RESET = "RESET";

export const getgames =  () => {
  return function(dispatch){
     axios.get("http://localhost:3001/videogames")
    .then(response =>{
      dispatch({ type: GET_VIDEOGAMES, payload: response.data })
    })
  }
};
export const searchGames =  (name) => {
  return { type: SEARCH_GAMES, payload: name}
};
export const reset =  () => {
  return { type: RESET}
};
