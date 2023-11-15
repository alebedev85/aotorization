const BASE_URL = 'https://ylab.zenclass.ru';

const makeRequest = (url, method, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  return fetch(`${BASE_URL}/${url}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error occurred!')
      }
      return res.json()
    })
}

export const authorize = (email, password) => {
  return makeRequest('signin', 'POST', { email, password })
}
