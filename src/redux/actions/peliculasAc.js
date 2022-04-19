import axios from "axios";
import { setLoader } from "../actions";

export const pelActions = {
  getPeliculas: "SET_PELICULAS",
  getGenero: "GET_GENERO",
};

export const getPeliculas = (movies) => ({
  type: pelActions.getPeliculas,
  payload: movies,
});

export const getGenero = (gen) => ({
  type: pelActions.getGenero,
  payload: gen,
});

export const getPeliculasThunk = () => {
  return (dispatch) => {
    dispatch(setLoader(false));
    return axios
      .get(`https://uvk-api.herokuapp.com/uvk/pelicula/`)
      .then((res) => dispatch(getPeliculas(res.data)))
      .finally(() => dispatch(setLoader(false)));
  };
};
export const postPeliculasThunk = (peli) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .post(`https://uvk-api.herokuapp.com/uvk/pelicula/`, peli)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const putPeliculasThunk = (id, peli) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`, peli)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const deletePeliculasThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const getGeneroThunk = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/genero/")
      .then((res) => dispatch(getGenero(res.data)))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const postGeneroThunk = (genero) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .post(`https://uvk-api.herokuapp.com/uvk/genero/`, genero)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const putGeneroThunk = (id, genero) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/genero/${id}`, genero)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};

export const deleteGeneroThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/genero/${id}`)
      .then(() => dispatch(getPeliculasThunk()))
      .finally(() => dispatch(setLoader(false)));
  };
};
