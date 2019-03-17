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
