import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';

const router = Router();

// Rutas
router.get('/', getTodos);         // Obtener todos los TODOs
router.post('/', createTodo);      // Crear un nuevo TODO
router.put('/:id', updateTodo);    // Actualizar un TODO existente
router.delete('/:id', deleteTodo); // Eliminar un TODO

export default router;
