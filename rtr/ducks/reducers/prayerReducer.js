import axios from 'axios';

const initialState = {
  prayers: [],
  selectedPrayers: [],
  prayersLoading: false,
};


const GET_PRAYERS_BY_TYPE = 'GET_PRAYERS_BY_TYPE';
const GET_PRAYERS_BY_ID = 'GET_PRAYERS_BY_ID';
const GET_PRAYERS_BY_DAY = 'GET_PRAYERS_BY_DAY';
const GET_PRAYERS_BY_CATEGORY = 'GET_PRAYERS_BY_CATEGORY';
const GET_ALL_PRAYERS = 'GET_ALL_PRAYERS';
const SELECT_PRAYER = 'SELECT_PRAYER';

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_PRAYERS_BY_TYPE}_FULFILLED`:
      let prayers = action.payload.data.map(e => {
        return {...e, selected: false};
      });
      return {
        ...state,
        prayersLoading: false,
        prayers,
      };
    case `${GET_PRAYERS_BY_TYPE}_PENDING`:
      return {
        ...state,
        prayersLoading: true,
      };
    case `${GET_PRAYERS_BY_ID}_FULFILLED`:
      return {
        ...state,
        prayersLoading: false,
        prayers: action.payload.data,
      };
    case `${GET_PRAYERS_BY_ID}_PENDING`:
      return {
        ...state,
        prayersLoading: true,
      };
    case `${GET_PRAYERS_BY_DAY}_FULFILLED`:
      return {
        ...state,
        prayersLoading: false,
        prayers: action.payload.data,
      };
    case `${GET_PRAYERS_BY_DAY}_PENDING`:
      return {
        ...state,
        prayersLoading: true,
      };
    case `${GET_PRAYERS_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        prayersLoading: false,
        prayers: action.payload.data,
      };
    case `${GET_PRAYERS_BY_CATEGORY}_PENDING`:
      return {
        ...state,
        prayersLoading: true,
      };
    case `${GET_ALL_PRAYERS}_FULFILLED`:
      return {
        ...state,
        prayersLoading: false,
        prayers: action.payload.data,
      };
    case `${GET_ALL_PRAYERS}_PENDING`:
      return {
        ...state,
        prayersLoading: true,
      };
    case `${SELECT_PRAYER}`:
      let tempPrayers = state.prayers.slice();
      tempPrayers[action.payload.index].selected = !tempPrayers[action.payload.index].selected;
      return {
        ...state,
        prayers: tempPrayers,
      };
    default:
      return state;
  }
}

export function getPrayersByType(type) {
  return {
    type: GET_PRAYERS_BY_TYPE,
    payload: axios(`http://localhost:3001/prayers/type/${type}`),
  };
}
export function getPrayersByID(id) {
  return {
    type: GET_PRAYERS_BY_ID,
    payload: axios(`/prayers/id/${id}`),
  };
}
export function getPrayersByDay(day) {
  return {
    type: GET_PRAYERS_BY_DAY,
    payload: axios(`/prayers/day/${day}`),
  };
}
export function getPrayersByCategory(category) {
  return {
    type: GET_PRAYERS_BY_CATEGORY,
    payload: axios(`/prayers/category/${category}`),
  };
}
export function getAllPrayers() {
  return {
    type: GET_PRAYERS_BY_CATEGORY,
    payload: axios(`/prayers`),
  };
}
export function selectPrayer(prayer, index) {
  return {
    type: SELECT_PRAYER,
    payload: {
      prayer,
      index,
    },
  };
}
