import heroes from "../data/heroes";

const randomTime = () => {
  return Math.round(Math.random() * 1000)
}

const fetcher = new Promise ((resolve, reject) => {
  const error = "ERROR 404. Not found!"
  return setTimeout(() => {
    true ? resolve(heroes) : reject(error)
  }, randomTime());
});

export default fetcher;