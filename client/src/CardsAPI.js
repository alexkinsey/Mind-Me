const baseURL = 'http://localhost:5000/mind-me/';

const getCards = (collection) => {
  console.log(collection);
  const URL = baseURL + collection.toLowerCase();
  return fetch(URL).then((res) => res.json());
};

export default getCards;
