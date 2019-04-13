import axios from 'axios'

const initialState = {
  prayers: [],
  prayersLoading: false
}

const GET_PRAYERS_BY_TYPE = 'GET_PRAYERS_BY_TYPE'
const GET_PRAYERS_BY_ID = 'GET_PRAYERS_BY_ID'
const GET_PRAYERS_BY_DAY = 'GET_PRAYERS_BY_DAY'
const GET_PRAYERS_BY_CATEGORY = 'GET_PRAYERS_BY_CATEGORY'


export default function(state = initialState, action){
  switch (action.type) {
    case `${GET_PRAYERS_BY_TYPE}_FULFILLED`:
      return{
        ...state,
        prayersLoading: false,
        prayers: action.payload.data
      }
    case `${GET_PRAYERS_BY_TYPE}_PENDING`:
      return{
        ...state,
        prayersLoading: true
      }
    case `${GET_PRAYERS_BY_ID}_FULFILLED`:
      return{
        ...state,
        prayersLoading: false,
        prayers: action.payload.data
      }
    case `${GET_PRAYERS_BY_ID}_PENDING`:
      return{
        ...state,
        prayersLoading: true
      }
    case `${GET_PRAYERS_BY_DAY}_FULFILLED`:
      return{
        ...state,
        prayersLoading: false,
        prayers: action.payload.data
      }
    case `${GET_PRAYERS_BY_DAY}_PENDING`:
      return{
        ...state,
        prayersLoading: true
      }
    case `${GET_PRAYERS_BY_CATEGORY}_FULFILLED`:
      return{
        ...state,
        prayersLoading: false,
        prayers: action.payload.data
      }
    case `${GET_PRAYERS_BY_CATEGORY}_PENDING`:
      return{
        ...state,
        prayersLoading: true
      }
    case `${GET_ALL_PRAYERS}_FULFILLED`:
      return{
        ...state,
        prayersLoading: false,
        prayers: action.payload.data
      }
    case `${GET_ALL_PRAYERS}_PENDING`:
      return{
        ...state,
        prayersLoading: true
      }
      
    default:
      return state
  }
}


export function getPrayersByType(type){
  return{
    type: GET_PRAYERS_BY_TYPE,
    payload: axios(`/prayers/type/${type}`)
  }
}
export function getPrayersByID(id){
  return{
    type: GET_PRAYERS_BY_ID,
    payload: axios(`/prayers/id/${id}`)
  }
}
export function getPrayersByDay(day){
  return{
    type: GET_PRAYERS_BY_DAY,
    payload: axios(`/prayers/day/${day}`)
  }
}
export function getPrayersByCategory(category){
  return{
    type: GET_PRAYERS_BY_CATEGORY,
    payload: axios(`/prayers/category/${category}`)
  }
}
export function getAllPrayers(){
  return{
    type: GET_PRAYERS_BY_CATEGORY,
    payload: axios(`/prayers`)
  }
}