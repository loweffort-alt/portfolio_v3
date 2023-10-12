export interface Template {
  link: {
    Github: string;
    Doc: string;
    Figma?: string;
    Server?: string;
    Cliente?: string;
  };
  title: string;
  state: string;
}
const one: Template = {
  link: {
    Github: "https://github.com/loweffort-alt/crud-auth",
    Doc: "/",
    Figma:
      "https://www.figma.com/community/file/1275291490973723744/rest-api-diagram-eng-esp",
    Server: "/",
    Cliente: "/",
  },
  title: "ToDoLock: Gestión de Tareas con Sesiones de Usuario",
  state: "En Progreso",
};
const two: Template = {
  link: {
    Github: "https://github.com/loweffort-alt/nvim_2023",
    Doc: "https://loweffort.notion.site/Advance-ReadMe-ed082419606e445b83f60d1466368dae?pvs=4",
  },
  title: "Nvim + Lua: La combinación ganadora",
  state: "Terminado",
};
const three: Template = {
  link: {
    Github: "https://github.com/loweffort-alt/check-in_simulator",
    Doc: "https://loweffort.notion.site/Airport-API-Documentation-3588c8a12db64b8dbd725a7b7b65a6c7",
  },
  title: "Check-In Virtual: ¡Listos para Despegar!",
  state: "En progreso",
};
const four: Template = {
  link: {
    Github: "https://github.com/loweffort-alt/PERN-crud-tasks-Backend",
    Doc: "/",
    Server: "https://pern-alex.onrender.com/",
  },
  title: "BackToDo: El Motor detrás de tus Tareas",
  state: "En Progreso",
};
const five: Template = {
  link: {
    Github: "https://github.com/loweffort-alt/PERN-crud-tasks-Frontend",
    Doc: "/",
    Figma: "/",
    Cliente: "https://loweffort-alt.github.io/PERN-crud-tasks-Frontend/",
  },
  title: "FrontTodo: Tu Ventana a la Productividad",
  state: "En progreso",
};

export const bytitle = {
  one,
  two,
  three,
  four,
  five,
};
export const projects = Object.values(bytitle);
