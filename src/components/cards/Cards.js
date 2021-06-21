import { simplifyData, getRandomBreeds } from "./DogAPI";

const Cards = async () => {
  const breeds = await getRandomBreeds(4);
  const myCards = await simplifyData(breeds);
  return myCards;
};

const dummyCards = [
  { id: 1, name: "Loading...", imageUrl: "" },
  { id: 2, name: "Loading...", imageUrl: "" },
  { id: 3, name: "Loading...", imageUrl: "" },
  { id: 4, name: "Loading...", imageUrl: "" },
];

export default Cards;
export { dummyCards };
