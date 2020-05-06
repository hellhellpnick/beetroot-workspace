
const ROOT_URL = 'https://jsonplaceholder.typicode.com';

const url = {
  posts: `${ROOT_URL}/posts`,
  comments: `${ROOT_URL}/comments`,
  albums: `${ROOT_URL}/albums`,
  photos: `${ROOT_URL}/photos`,
  todos: `${ROOT_URL}/todos`,
  users: `${ROOT_URL}/users`,
  post(id) {
    return `${this.posts}/${id}`
  },
  todo(id) {
    return `${this.todos}/${id}`
  }
}

const catchError = err => console.log(`Something wrong!`, err)

const getData = (url) => {
  return fetch(url).then(res => res.json()).catch(catchError)
}

export { ROOT_URL, url, getData };