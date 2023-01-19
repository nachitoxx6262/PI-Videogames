import { GET_VIDEOGAMES,SEARCH_GAMES,RESET, GET_BYID,RESET_BYID} from "./action";
const initialState = {
  games: [],
  gamesFilter:[],
  gameById:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        games: action.payload,
        gamesFilter: action.payload,
      };
      case SEARCH_GAMES:
      return {
        ...state,
        gamesFilter: state.games.filter((game)=>game.name.toUpperCase().includes(action.payload.toUpperCase()) || game.id == action.payload),
      };
      case GET_BYID:
      return {
        ...state,
        gameById: action.payload,
      };
      case RESET_BYID:
        return{
          ...state,
          gameById: []
        }
      case RESET:
        return {
          ...state,
          gamesFilter: state.games,
        };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
