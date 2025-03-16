import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

// Подключаем базу данных
connectDB();

// Middleware для парсинга JSON
app.use(express.json());

// Маршруты
app.use('/api/v1/', categoryRoutes);
app.use('/api/v1/', productRoutes);

// Настроим порт
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
