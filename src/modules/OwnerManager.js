const remoteURL = 'http://localhost:5002'

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`)
    .then(data => data.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`)
    .then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
    method: "DELETE"}).then(data => data.json())
  }
}