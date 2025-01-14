import VKLogo from "/assets/img/svg/vk.svg";
import OKLogo from "/assets/img/svg/ok.svg";
import YTLogo from "/assets/img/svg/youtube.svg";

export const socialButtonsData: SocialButtonData[] = [
  { imgSrc: VKLogo, href: "#" },
  { imgSrc: OKLogo, href: "#" },
  { imgSrc: YTLogo, href: "#" },
];

export const linksData: LinkBlock[] = [
  {
    title: "Сыр и тесто",
    links: [
      { text: "О нас", href: "#" },
      { text: "Акции", href: "#" },
      { text: "Контакты", href: "#" },
    ],
  },
  {
    title: "Работа",
    links: [{ text: "Актуальные вакансии", href: "#" }],
  },
  {
    title: "Партнерам",
    links: [
      { text: "Франшиза", href: "#" },
      { text: "Инвестиции", href: "#" },
      { text: "Поставщикам", href: "#" },
      { text: "Предложить помещение", href: "#" },
    ],
  },
  {
    links: [{ text: "feedback@cheesendough.com", href: "#" }],
  },
];

interface LinkBlock {
  title?: string;
  links: Link[];
}
interface Link {
  text: string;
  href: string;
}
interface SocialButtonData {
  imgSrc: string;
  href: string;
}
