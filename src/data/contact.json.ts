export interface Template {
  link: string;
  type: string;
  title: string;
}
const one: Template = {
  link: "mailto:farfan_alexander@outlook.com",
  type: "Email",
  title: "farfan_alexander@outlook.com",
};
const two: Template = {
  link: "https://twitter.com/loweffort_alt",
  type: "Twitter",
  title: "loweffort_alt",
};
const three: Template = {
  link: "https://drive.google.com/file/d/1xTSWrMKQZemCGhtFT4ba5vvw1T90qNZ-/view?usp=sharing",
  type: "CV",
  title: "Darío Alexander Farfán Navarro",
};
export const bytype = {
  one,
  two,
  three,
};
export const contact = Object.values(bytype);
