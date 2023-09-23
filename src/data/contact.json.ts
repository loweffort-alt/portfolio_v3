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
  link: "https://twitter.com/low_effortl",
  type: "Twitter",
  title: "low_effortl",
};
const three: Template = {
  link: "https://drive.google.com/file/d/1AtwCZKdI0mJ0QK22gyRxxzFpc2m9QJ4a/view?usp=sharing",
  type: "CV",
  title: "farfan_alexander",
};
export const bytype = {
  one,
  two,
  three,
};
export const contact = Object.values(bytype);
