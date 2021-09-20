import characters from "../data/characters";

const randomTime = () => {
  return Math.round(Math.random() * 2000)
}

const fetcher = new Promise ((resolve, reject) => {
  const error = "ERROR 404. Not found!"
  return setTimeout(() => {
    true ? resolve(characters) : reject(error)
  }, randomTime());
});

export const fetcherId = (id) => new Promise ((resolve, reject) => {
  const error = "ERROR 404. Not found!"
  return setTimeout(() => {
    const character = characters.find((character) => character.id === id)

    true ? resolve(character) : reject(error)
  }, randomTime());
});

export default fetcher;