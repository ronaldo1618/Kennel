const remoteURL = 'http://localhost:5002'

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`)
    .then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(data => data.json())
  },
  post(locationObj) {
    return fetch(`${remoteURL}/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locationObj)
    }).then(data => data.json())
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json())
  },
  getWithEmployees() {
    return fetch(`${remoteURL}/locations/?_embed=employees`).then(data => data.json())
  }
}