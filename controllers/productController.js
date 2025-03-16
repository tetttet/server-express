import { client } from "../config/db.js";

export const getProduct = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await client.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};
