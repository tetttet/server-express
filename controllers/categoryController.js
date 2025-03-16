import { client } from '../config/db.js';

// Получение всех категорий
const getCategories = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM category');
    res.status(200).json(result.rows); // Отправляем категории в ответе
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Добавление новой категории
const addCategory = async (req, res) => {
  const { title, subtitle, img } = req.body;

  if (!title || !subtitle || !img) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await client.query(
      'INSERT INTO category (title, subtitle, img) VALUES ($1, $2, $3) RETURNING *',
      [title, subtitle, img]
    );
    res.status(201).json(result.rows[0]); // Возвращаем только что добавленную категорию
  } catch (err) {
    console.error('Error adding category:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getCategories, addCategory };
