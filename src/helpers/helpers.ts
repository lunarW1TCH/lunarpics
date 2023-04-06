import { useEffect } from 'react';

export const getRandomInt = function (max: number) {
  return Math.floor(Math.random() * max) + 1;
};

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
