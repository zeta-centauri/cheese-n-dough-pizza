import { useEffect } from "react";

const API_URL = "https://67028b4ebd7c8c1ccd3f2a78.mockapi.io/categories";

export const useNormalizeScroll = () => {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);
};

export const fetchData = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
