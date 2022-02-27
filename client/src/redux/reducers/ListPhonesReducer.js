import {
  LIST_PHONES_FETCHED,
  FETCHING_LIST_PHONES,
  FETCHING_LIST_PHONES_FAILURE,
} from "../actions/ListPhonesConstants";

const initialState = {
  data: null,
  isFetching: false,
  error: false,
};

const ListPhonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LIST_PHONES: {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    }
    case LIST_PHONES_FETCHED: {
      return {
        ...state,
        data: action.result?.phones,
        isFetching: false,
      };
    }
    case FETCHING_LIST_PHONES_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default ListPhonesReducer;

export const getPhoneReducer = (state) => state;

export const listPhones = (state) => getPhoneReducer(state).data;
export const isFetching = (state) => getPhoneReducer(state).isFetching;
export const error = (state) => getPhoneReducer(state).error;
