const signupForm = {
  username: "",
  email: "",
  password: "",

}

export default (state=signupForm, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "RESET_SIGNUP_FORM":
      return signupForm
    default:
      return state
  }
}
