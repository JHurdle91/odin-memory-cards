const API_KEY = "ca217401-8ae2-4cc7-b949-46bbfab5be7b";

const getBreeds = async () => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
    { mode: "cors" }
  );
  const breedData = await response.json();
  return breedData;
};

const getSimplifiedBreedData = async () => {
  const breedData = await getBreeds();
  const simplifiedData = breedData.map((breed) => {
    const { id, name, image } = breed;
    return {
      id: id,
      name: name,
      imageUrl: image.url,
    };
  });
  return simplifiedData;
};

const getBreedImageUrl = async (breedName) => {
  const breedData = await getSimplifiedBreedData();
  const breed = breedData.filter((entry) => {
    return entry.name === breedName;
  });
  const { imageUrl } = breed[0];
  return imageUrl;
};

const getRandomBreeds = async (n) => {
  const breedData = await getBreeds();
  let breeds = [];
  while (n > 0) {
    const index = Math.floor(Math.random() * breedData.length);
    const breed = breedData[index];
    breeds = breeds.concat(breed);
    n--;
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
export {
  getSimplifiedBreedData,
  getBreedImageUrl,
  getRandomBreeds,
  simplifyData,
};
