import { simplifyData, getRandomBreeds } from "./DogAPI";

const n = 12;

const Cards = async () => {
  const breeds = await getRandomBreeds(n);
  const cards = simplifyData(breeds);
  return cards;
};

const dummyCards = () => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards[i] = {
      id: i,
      name: "Loading...",
      imageUrl: "",
    };
  }
  return cards;
};

export default Cards;
export { dummyCards };
