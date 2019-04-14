import axios from 'axios'

const initialState = {
  user: {},
  users: [],
  prayers: [],
  isLoading: false
}

const LOGIN = 'LOGIN'
const REGISTER_USER = 'REGISTER_USER'
const GET_ALL_USERS = 'GET_ALL_USERS'


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
    case `${LOGIN}_REJECTED`:
    console.log(action.payload)
      return {
        ...state,
        isLoading: false
      }

    case `${GET_ALL_USERS}_FULFILLED`:

      return {
        ...state,
        users: action.payload.data
      }

    case `${GET_ALL_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}

export function register({firstName, lastName, email, password}) {
  return {
    type: REGISTER_USER,
    payload: axios.post('http://localhost:3001/register', { firstName, lastName, email, password })
  }
}

export function login({email, password}) {
  return {
    type: LOGIN,
    payload: axios.post('http://localhost:3001/login', { email, password })
  }
}

export function getAllUsers() {
  return {
    type: GET_ALL_USERS,
    payload: axios.get('http://localhost:3001/users')
  }
}
