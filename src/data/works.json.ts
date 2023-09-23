export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
}
const one: Template = {
  link: "https://loweffort.notion.site/Introducci-n-a-NodeJS-06f3552c1bde4fbdbf5ca1301bc8d747?pvs=4",
  title: "Introducción a NodeJS",
  location: "Åland Islands, Finland",
  date: "13.02.2023",
};
const two: Template = {
  link: "https://loweffort.notion.site/NodeJS-01-b3bf324784cf4618b32c6199ce24bf34?pvs=4",
  title: "NodeJS 01",
  location: "Åland Islands, Finland",
  date: "10.02.2022",
};
const three: Template = {
  link: "https://loweffort.notion.site/Docker-Basics-8ca86e7064884b3cb648f217fb11a91f?pvs=4",
  title: "Docker Basics",
  location: "Åland Islands, Finland",
  date: "10.02.2022",
};
const four = {
  link: "https://example.com",
  title: "New Product Launch",
  location: "San Francisco, CA",
  date: "01.05.2022",
};

const five = {
  link: "https://example.com",
  title: "E-commerce Website Redesign",
  location: "New York, NY",
  date: "15.06.2022",
};

const six = {
  link: "https://example.com",
  title: "Mobile App Development",
  location: "London, UK",
  date: "10.08.2022",
};

const seven = {
  link: "https://example.com",
  title: "Marketing Campaign Strategy",
  location: "Sydney, Australia",
  date: "01.09.2022",
};

const eight = {
  link: "https://example.com",
  title: "Social Media Management",
  location: "Paris, France",
  date: "15.10.2022",
};

const nine = {
  link: "https://example.com",
  title: "UI/UX Design",
  location: "Tokyo, Japan",
  date: "10.11.2022",
};

const ten = {
  link: "https://example.com",
  title: "Content Creation",
  location: "Toronto, Canada",
  date: "01.12.2022",
};

const eleven = {
  link: "https://example.com",
  title: "SEO Optimization",
  location: "Berlin, Germany",
  date: "15.01.2020",
};

const twelve = {
  link: "https://example.com",
  title: "Brand Identity Development",
  location: "São Paulo, Brazil",
  date: "10.02.2020",
};

const thirteen = {
  link: "https://example.com",
  title: "Video Production",
  location: "Seoul, South Korea",
  date: "01.03.2020",
};
export const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
};
export const works = Object.values(bytitle);
