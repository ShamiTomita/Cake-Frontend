export const login = (credentials, history) => {
  return (dispatch) => {
    fetch('http://localhost:3000/users/signin', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then((account)=>{
      if (account.error){
        alert(account.error)
      }else{
        console.log(account)
        dispatch(setCurrentAccount(account.user))
        dispatch({type:"FETCH_ACCOUNT", account: account.user.data})

      }
    })
  };
};
