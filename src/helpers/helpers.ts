export const getRandomInt = function (max: number) {
  return Math.floor(Math.random() * max) + 1;
};

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
