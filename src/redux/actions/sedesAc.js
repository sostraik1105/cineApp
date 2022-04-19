import axios from "axios";
import { setLoader } from "../actions";

export const sedeActions = {
  getCiudad: "GET_CUIDAD",
  getSede: "GET_SEDE",
};

export const getCiudad = (ciudad) => ({
  type: sedeActions.getCiudad,
  payload: ciudad,
});

export const getSede = (sede) => ({
  type: sedeActions.getSede,
  payload: sede,
});

export const getCiudadThunk = () => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/ciudad")
      .then((res) => dispatch(getCiudad(res.data)))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const postCiudadThunk = (ciudad) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .post("https://uvk-api.herokuapp.com/uvk/ciudad", ciudad)
      .then(() => dispatch(getCiudadThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const putCiudadThunk = (id, ciudad) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/ciudad/${id}`, ciudad)
      .then(() => dispatch(getCiudadThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const deleteCiudadThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/ciudad/${id}`)
      .then(() => dispatch(getCiudadThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const getSedeThunk = () => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/sede/")
      .then((res) => dispatch(getSede(res.data)))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const postSedeThunk = (sede) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .post("https://uvk-api.herokuapp.com/uvk/sede/", sede)
      .then((res) => dispatch(getSedeThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const putSedeThunk = (id, sede) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/sede/${id}`, sede)
      .then((res) => dispatch(getSedeThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};

export const deleteSedeThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoader(true))
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/sede/${id}`)
      .then((res) => dispatch(getSedeThunk()))
      .finally(()=>dispatch(setLoader(false)));
  };
};
