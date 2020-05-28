const remoteURL = 'http://localhost:5002'

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`)
    .then(data => data.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`)
    .then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(data => data.json())
  }
}