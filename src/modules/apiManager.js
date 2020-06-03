const remoteURL = `http://localhost:5002`

export default {
  get(collection, id) {
    return fetch(`${remoteURL}/${collection}/${id}`)
    .then(result => result.json())
  },
  getAll(collection) {
    return fetch(`${remoteURL}/${collection}`).then(result => result.json())
  },
  delete(collection, id) {
    return fetch(`${remoteURL}/${collection}/${id}`, {
      method: "DELETE"
    }).then(data => data.json())
  },
  post(collection, obj) {
    return fetch(`${remoteURL}/${collection}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  update(collection, editedObj) {
    return fetch(`${remoteURL}/${collection}/${editedObj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedObj)
    }).then(data => data.json())
  },
  getRandomId(collection) {
    return fetch(`${remoteURL}/${collection}`)
      .then(result => result.json())
      .then(array => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomObj = array[randomIndex];
        return randomObj.id;
      });
  },
  getWithEmployees() {
    return fetch(`${remoteURL}/locations/?_embed=employees`).then(data => data.json())
  },
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`).then(data => data.json())
  }
}
