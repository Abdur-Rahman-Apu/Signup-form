const getRandomValue = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

export { getRandomValue };
