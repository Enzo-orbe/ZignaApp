import {
  FETCHING_LIST_PHONES,
  FETCHING_LIST_PHONES_FAILURE,
  LIST_PHONES_FETCHED,
} from "./ListPhonesConstants";
import { getPhonesList } from "../../utils/Services/ListPhonesService";

export const fetchDataFailure = () => {
  return {
    type: FETCHING_LIST_PHONES_FAILURE,
  };
};

export const fetchingData = () => {
  return {
    type: FETCHING_LIST_PHONES,
  };
};

export const saveDataFetched = (res) => {
  return {
    type: LIST_PHONES_FETCHED,
    result: res,
  };
};

export const asyncFetchData = () => {
  return (dispatch) => {
    dispatch(fetchingData());
    getPhonesList()
      .then((data) => dispatch(saveDataFetched(data)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};
