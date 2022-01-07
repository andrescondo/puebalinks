const API = 'https://reqres.in'

export const authenticate = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);

  }
}

export const fetchRequest = (data) => {
  const { url, idUrl,method, ...rest } = data;
  const body = {body: JSON.stringify(rest)}
  
  return fetch(`${API}${url}/${idUrl ? idUrl : ''}`, {
    method: `${method ? method : "POST"}`,
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    if(rest){
      body
    }

  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};