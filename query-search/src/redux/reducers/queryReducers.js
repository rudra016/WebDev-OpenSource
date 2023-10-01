import {
  LOADING,
  RESULT_ERROR,
  SET_RESULT,
  SET_FILTER,
  RESULT_SHOW,
  SET_SEARCHWORD,
  SHOW_LOADING,
} from "../types";
const { combineReducers } = require("redux");

const initalState = {
  loading: false,
  searchword: "",
  filterby: "",
  result: {},
  show: 0,
  show_load: false,
  error: "",
};

const queryReducers = (state = initalState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, result: {}, loading: true };
    case SET_SEARCHWORD:
      return { ...state, searchword: action.payload, error: "" };
    case SET_FILTER:
      return { ...state, filterby: action.payload, error: "", show: 0 };
    case SET_RESULT:
      return { ...state, loading: false, result: action.payload, show: 0 };
    case RESULT_ERROR:
      return { ...state, loading: false, result: {}, error: "true" };
    case RESULT_SHOW:
      return {
        //Component render 2 times but i don't know why please dont touch here ah
        ...state,
        show: state.show < 19 ? state.show + 0.5 : state.show,
        show_load: false,
      };
    case SHOW_LOADING:
      return { ...state, show_load: true };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: queryReducers,
});

export default reducers;
