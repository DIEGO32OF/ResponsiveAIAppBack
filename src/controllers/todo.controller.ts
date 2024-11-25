import { Request, Response } from 'express';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const todos: Todo[] = [];

// Obtener todos los TODOs
export const getTodos = (req: Request, res: Response): Response => {
  return res.json(todos);
};

// Crear un nuevo TODO
export const createTodo = (req: Request, res: Response): Response => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTodo: Todo = {
    id: (Math.random() * 1000).toString(),
    title,
    done: false,
  };

  todos.push(newTodo);
  return res.status(201).json(newTodo);
};

// Actualizar un TODO existente
export const updateTodo = (req: Request, res: Response): Response => {
  const { id } = req.params;
  const { title, done } = req.body;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = title !== undefined ? title : todo.title;
  todo.done = done !== undefined ? done : todo.done;

  return res.json(todo);
};

// Eliminar un TODO
export const deleteTodo = (req: Request, res: Response): Response => {
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(index, 1);
  return res.status(204).send();
};
