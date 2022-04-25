const loginForm = {
  username: "",
  email: "",
  password: ""
}

export default (state = loginForm, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData
    case "RESET_LOGIN_FORM":
      return loginFormData
    default:
      return state
  }
}
