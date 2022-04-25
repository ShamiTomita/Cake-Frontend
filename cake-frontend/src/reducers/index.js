import {combineReducers} from "redux"
import authReducer from './authReducer.js'
import loginForm from './loginForm.js'
import signupForm from './signupForm.js'
export default combineReducers({
  authReducer,
  loginForm,
  signupForm,
})
