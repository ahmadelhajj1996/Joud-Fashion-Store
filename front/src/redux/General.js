import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  language: "en",
  direction: "ltr",
  currency: "$",
};
export const setLanguage = (lang) => ({
  type: "SET_LANGUAGE",
  payload: lang,
});

export const setCurrency = (coin) => ({
  type: "SET_CURRENCY",
  payload: coin,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE": {
      if (action.payload === "ar") {
        return {
          ...state,
          language: action.payload,
          direction: "rtl",
        };
      }
      return {
        ...state,
        language:  action.payload,
        direction : "ltr",
      };
    }
 
    case "SET_CURRENCY": {
      return {
        ...state,
        currency: action.payload,
      };
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const generalReducer = persistReducer(persistConfig, reducer);

export default generalReducer;
