const getRandomPastelColor = () => {
  const randomChannel = () => Math.floor(Math.random() * 128 + 127);
  const r = randomChannel();
  const g = randomChannel();
  const b = randomChannel();
  return `rgb(${r}, ${g}, ${b})`;
};


export { getRandomPastelColor }