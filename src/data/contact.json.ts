export interface Template {
  link: string;
  type: string;
  title: string;
}
const one: Template = {
  link: "https://loweffort.notion.site/Bienvenido-emprendedor-b6e0e8635bfd412bab98cb731372e3d9",
  type: "Freelance",
  title: "¡Dale Vida a tu Presencia en la Web!",
};
const two: Template = {
  link: "mailto:farfan_alexander@outlook.com",
  type: "Email",
  title: "farfan_alexander@outlook.com",
};
const three: Template = {
  link: "https://drive.google.com/file/d/1xTSWrMKQZemCGhtFT4ba5vvw1T90qNZ-/view?usp=sharing",
  type: "CV",
  title: "Darío Alexander Farfán Navarro",
};
const four: Template = {
  link: "https://twitter.com/loweffort_alt",
  type: "Twitter",
  title: "loweffort_alt",
};
export const bytype = {
  one,
  two,
  three,
  four,
};
export const contact = Object.values(bytype);
