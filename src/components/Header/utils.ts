import chargeIcon from "/assets/img/svg/lightning-icon.svg";
import giftIcon from "/assets/img/svg/gift-icon.svg";
import aboutIcon from "/assets/img/svg/about-icon.svg";

export const navLinks: NavLink[] = [
  { iconSrc: chargeIcon, text: "Контакты", href: "#" },
  { iconSrc: giftIcon, text: "Акции", href: "#" },
  { iconSrc: aboutIcon, text: "О нас", href: "#" },
];

interface NavLink {
  iconSrc?: string;
  text?: string;
  href: string;
}
