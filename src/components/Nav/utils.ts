export const categories: NavCategoryLink[] = [
  { href: "#Пиццы", text: "Пиццы" },
  { href: "#Закуски", text: "Закуски" },
  { href: "#Завтраки", text: "Завтраки" },
  { href: "#Напитки", text: "Напитки" },
  { href: "#Десерты", text: "Десерты" },
];

interface NavCategoryLink {
  href: string;
  text: string;
}