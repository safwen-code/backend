import {
  SET_LOADING,
  GET_THINGS,
  DELET_THING,
  EDITE_THING,
  ADD_THING,
} from "./Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state , action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_THINGS:
    case ADD_THING:
      return {
        ...state,
        things: payload,
        loading: false,
      };
    case DELET_THING:
      return {
        ...state,
        things: state.things.filter((thing) => thing.id !== payload.id),
      };

    default:
      return state;
  }
};
