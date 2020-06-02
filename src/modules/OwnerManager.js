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
  },
  post(ownerObj) {
    return fetch(`${remoteURL}/owners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ownerObj)
    }).then(data => data.json())
  },
  update(editedOwner) {
    return fetch(`${remoteURL}/owners/${editedOwner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedOwner)
    }).then(data => data.json())
  }
}