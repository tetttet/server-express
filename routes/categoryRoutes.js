import express from 'express';
import { getCategories, addCategory } from '../controllers/categoryController.js';

const router = express.Router();

// Получение всех категорий
router.get('/categories', getCategories);

// Добавление новой категории
router.post('/categories', addCategory);

export default router;
