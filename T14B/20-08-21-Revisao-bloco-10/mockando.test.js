const service = require('./service');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});

const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

const fetcher = require('./script.js');

describe('', () => {
  it('', () => {
    jest.mock() = fetcher().mockImplementation();
  });
});

// const fetch = require('node-fetch');

// const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

// // Recupera as informações do usuário a partir do username
// const getRepositoryInfoFromUsername = async (username) => {
// const url = getUserReposUrl(username);
// const response = await fetch(url);

// const repositoryInfo = await response.json();

// let { name, company, twitter_username: twitter, location } = repositoryInfo;

// return {
// name,
// company,
// twitter,
// location
// }
// }

// getRepositoryInfoFromUsername('gfpoliva')
// .then((data) => console.log(data));

// module.exports = {
// getRepositoryInfoFromUsername,
// getUserReposUrl
// }; 

// https://www.codecademy.com/learn/learn-react-testing/modules/jest
// https://github.com/NashReact/jest-exercises
// https://github.com/kmesic/jest-exercises