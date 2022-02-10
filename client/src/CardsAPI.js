const baseURL = 'https://mind-me-9b3f9-default-rtdb.firebaseio.com/';

const getCards = (collection) => {
  console.log(collection);
  const URL = baseURL + collection.toLowerCase()+'.json';
  console.log(URL)
  console.log(fetch(URL).then((res) => res.json()))
  return fetch(URL).then((res) => res.json());
};

export default getCards;
