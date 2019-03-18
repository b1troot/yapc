//model projektu
const projectModel = {
  //liczba zadan
  //mozna tez ustawic na automatyczne zliczanie
  tasksNum: 0,
  // wartosc procentowa ukonczonych zadan
  progress: 57,
  // data rozpoczęcia
  startedAt: "16.03.2019",
  // planowana data ukonczenia
  deadline: "02.04.2019",
  //roznica deadline - startedAt
  daysLeft: 16,
  // laczny czas pracy nad projektem,
  // obliczny na podstawie czasow  poszczegolnych zadan
  timeSpend: 360,
  // tablica z zadaniami, zawierajaca id,
  tasks: []
};

// model zadania
const taskModel = {
  id: "3e6d3",
  taskname: "some task to do",
  //fresh, in progress,?stuck?, done
  status: "fresh",
  // low,medium,high,very high
  priority: "low",
  // dlugosc sesji pomodoro - opcjonalne
  sessionLength: 25,
  // liczba przepracowanych sesji
  sessionsDone: 5,
  // ogolny czas pracy nad zadaniem
  timeSpend: 120
};

const task1 = {
  id: "3e6d3",
  name: "task number one",
  status: "fresh",
  priority: "low",
  sessionLength: 25,
  sessionsDone: 0,
  timeSpend: 0
};
const task2 = {
  id: "3e6d4",
  name: "task number two",
  status: "In Progress",
  priority: "medium",
  sessionLength: 25,
  sessionsDone: 4,
  timeSpend: 100
};
const project1 = {
  id: "3fdd763b",
  tasksNum: 2,
  progress: 57,
  startedAt: "16.03.2019",
  deadline: "02.04.2019",
  daysLeft: 16,
  timeSpend: 100,
  tasks: [task1, task2]
};
const mockProjects = [project1];
module.exports = {
  mockProjects
};
