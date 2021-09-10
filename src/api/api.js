export const Api = {
  url: 'http://localhost:3002/musicas',
  fetchGet: () =>  fetch(Api.url),
  fetchGetById: (id) => fetch(Api.url + '/FindById/' + id),
  fetchPost: (body) => {
    return fetch(Api.url + '/add', {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json"
      }),
      body: JSON.stringify(body)
    })
  }
}