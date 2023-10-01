import {
  LOADING,
  RESULT_ERROR,
  SET_RESULT,
  SET_FILTER,
  RESULT_SHOW,
  SET_SEARCHWORD,
  SHOW_LOADING,
} from "../types";

const loading = () => ({
  type: LOADING,
});

export const search_word = (word) => ({
  type: SET_SEARCHWORD,
  payload: word,
});

export const filter = (attribute) => ({
  type: SET_FILTER,
  payload: attribute,
});

const addData = (data) => ({
  type: SET_RESULT,
  payload: data,
});

const error = () => ({
  type: RESULT_ERROR,
});

export const showing = () => ({
  type: RESULT_SHOW,
});

export const show_loaded = () => ({
  type: SHOW_LOADING,
});

export const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch(loading());

    let term = getState().data.searchword;
    await fetch(
      `https://itunes.apple.com/search?term=${term}&entity=song&limit=200`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(addData(res));
      })
      .catch((err) => {
        dispatch(error());
      });
  };
};
