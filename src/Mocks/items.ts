export interface Section {
  title: string;
  position: number;
  taskIds?: string[];
  id: string;
}

export const createSection = ({
  title,
  position,
  taskIds,
  id,
}: {
  title: string;
  position: number;
  taskIds?: string[];
  id: string;
}) => ({
  title,
  position,
  taskIds,
  id,
});

export interface CustomDate {
  day: number;
  month: number;
  year: number;
  hour?: number;
  minutes?: number;
}

export type Priority = "Low" | "Medium" | "High";
export type Status = "At risk" | "Too late" | "Done";

interface User {
  id: string;
  name: string;
  icon: string;
}

interface History extends User {
  text: string;
}

interface Comment extends User {
  text: string;
  date: CustomDate;
}

const createRandomNumber = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min) + min);

export const createRandomDate = () => ({
  day: createRandomNumber(30, 1),
  month: createRandomNumber(12, 1),
  year: createRandomNumber(2021, 2000),
  hour: createRandomNumber(23),
  minutes: createRandomNumber(59),
});

export type State = "completed" | "incompleted";

export interface Task {
  id: string;
  title: string;
  asignee?: User[];
  startDate: CustomDate;
  endDate: CustomDate;
  priority?: Priority;
  status?: Status;
  description?: string;
  history?: History;
  sectionId: string;
  comments?: Comment[];
  state?: State;
}

export const createTask = ({
  id,
  title,
  asignee,
  startDate,
  endDate,
  priority,
  status,
  description,
  history,
  sectionId,
  state = "incompleted",
}: Task): Task => ({
  id,
  title,
  asignee,
  startDate,
  endDate,
  priority,
  status,
  description,
  history,
  sectionId,
  state,
});

export const createUser = ({ id, name, icon }: User) => ({
  id,
  name,
  icon,
});
