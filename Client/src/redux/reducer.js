import { ADD_FAV, REMOVE_FAV } from "./actions/types";
const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, payload] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorites) => parseInt(favorites.id) !== parseInt(payload)
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
