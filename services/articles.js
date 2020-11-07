export default function getAll () {
  return new Promise ((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(err => reject(err));
  })
}
