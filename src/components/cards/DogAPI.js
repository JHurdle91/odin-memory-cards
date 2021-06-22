const API_KEY = "ca217401-8ae2-4cc7-b949-46bbfab5be7b";

const getBreeds = async () => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
    { mode: "cors" }
  );
  const breedData = await response.json();
  return breedData;
};

const getRandomBreeds = async (n) => {
  const breedData = await getBreeds();
  let breeds = [];
  while (n > 0) {
    const index = Math.floor(Math.random() * breedData.length);
    const breed = breedData[index];
    if (!breeds.includes(breed)) {
      breeds = breeds.concat(breed);
      n--;
    }
  }
  return breeds;
};

const simplifyData = async (breeds) => {
  breeds = await breeds;
  const simplifiedData = breeds.map((breed) => {
    const { id, name, image } = breed;
    return {
      id: id,
      name: name,
      imageUrl: image.url,
    };
  });
  return simplifiedData;
};

export default getBreeds;
export { simplifyData, getRandomBreeds };
