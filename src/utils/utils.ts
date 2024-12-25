const API_URL = "https://67028b4ebd7c8c1ccd3f2a78.mockapi.io/categories";

export const normalizeScroll = (isOpen: boolean) => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }
  return () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };
};

export const fetchData = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
