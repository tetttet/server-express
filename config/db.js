// db.js
import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";

dotenv.config(); // Загружаем переменные окружения из .env файла

// Создание клиента для PostgreSQL
const client = new Client({
  host: process.env.PGHOST,
  port: 5432, // Убедись, что у тебя правильный порт
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false, // Использование SSL, если это указано в .env
});

// Подключение к базе данных
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
    process.exit(1); // Завершаем приложение, если не удалось подключиться
  }
};

export { client, connectDB };
