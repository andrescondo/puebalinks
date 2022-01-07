const API = ''

export const fetchPost = (data) => {
  const { url, idUrl,method, ...rest } = data;
  return fetch(`${API}${url}/${idUrl ? idUrl : ''}`, {
    method: `${method ? method : "POST"}`,
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};