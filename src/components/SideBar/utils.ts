import lightningIcon from "/assets/img/svg/lightning-light.svg";
import giftIcon from "/assets/img/svg/gift-light.svg";
import infoIcon from "/assets/img/svg/info-light.svg";

export interface LinkData {
  href?: string;
  imageUrl: string;
  title: string;
  onClick?: () => void;
}

export const LinksData: LinkData[] = [
  { imageUrl: lightningIcon, title: "Контакты", href: "#" },
  { imageUrl: giftIcon, title: "Акции", href: "#" },
  { imageUrl: infoIcon, title: "О нас", href: "#" },
];
