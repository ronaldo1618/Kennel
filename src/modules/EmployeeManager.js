const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`)
    .then(data => data.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`)
    .then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(data => data.json())
  },
  post(employeeObj) {
    return fetch(`${remoteURL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeObj)
    }).then(data => data.json())
  }
}