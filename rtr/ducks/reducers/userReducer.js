import axios from 'axios'

const initialState = {
  user: {},
  prayers: [],
  isLoading: false
}

const LOGIN = 'LOGIN'
const REGISTER_USER = 'REGISTER_USER'
const GET_PRAYERS = 'GET_PRAYERS'


export default function (state = initialState, action) {
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      }
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      }
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
    case `${GET_PRAYERS}_FULFILLED`:
      return {
        ...state,
        prayers: action.payload.data
      }
    case `${GET_PRAYERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}

export function register(firstName, lastName, email, password) {
  return {
    type: REGISTER_USER,
    payload: axios.post('/register', { firstName, lastName, email, password })
  }
}

export function login(email, password) {
  return {
    type: LOGIN,
    payload: axios('/login', { email, password })
  }
}

export function getPrayers(type) {
  return {
    type: GET_PRAYERS,
    payload: axios(`/prayers/${type}`)
  }
}
