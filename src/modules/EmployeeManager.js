const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`)
    .then(data => data.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`)
    .then(data => data.json())
  }
}