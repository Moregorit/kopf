import { useState, useEffect, useRef } from 'react';
export const useVisibility = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Отключаем наблюдение
        }
      });
    }, options);
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Очищаем наблюдение при размонтировании
      }
    };
  }, [options]);
  return { isVisible, domRef };
};
