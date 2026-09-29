export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoFilter = "all" | "active" | "completed";
