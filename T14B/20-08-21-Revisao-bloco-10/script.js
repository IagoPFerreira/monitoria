const fetcher = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then((response) => response.json()).then((resposta) => console.log(resposta));

module.exports = { fetcher };