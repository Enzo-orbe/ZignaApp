import {
  FETCHING_DETAIL_PHONES,
  FETCHING_DETAIL_PHONES_FAILURE,
  DETAIL_PHONES_FETCHED,
} from "./DetailPhoneConstants";

export const fetchDataFailure = () => {
  return {
    type: FETCHING_DETAIL_PHONES_FAILURE,
  };
};

export const fetchingData = () => {
  return {
    type: FETCHING_DETAIL_PHONES,
  };
};

export const saveDataFetched = (res) => {
  return {
    type: DETAIL_PHONES_FETCHED,
    result: res,
  };
};

export const asyncDetailData = (data) => {
  return (dispatch) => {
    dispatch(fetchingData());
    dispatch(saveDataFetched(data));
  };
};
