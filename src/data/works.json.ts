export interface Template {
  link: string;
  title: string;
  status: string;
}
const one: Template = {
  link: "https://lalaeventplanner.com/",
  title: "Lala Event Planner",
  status: "En Progreso",
};
const two: Template = {
  link: "/",
  title: "FANA Automotriz",
  status: "En Progreso",
};
const three: Template = {
  link: "https://www.service-entretien-sjs.com/",
  title: "SJS | Entretien Service",
  status: "Terminado",
};
export const bytitle = {
  one,
  two,
  three,
};
export const works = Object.values(bytitle);
