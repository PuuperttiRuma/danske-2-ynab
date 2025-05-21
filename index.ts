import axios from "axios";
import "dotenv/config";

const baseURL = "https://api.ynab.com/v1/";
const token = process.env.AUTH_TOKEN;

async function getBudgets() {
  try {
    const response = await axios.get(`${baseURL}/budgets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.dir(response.data, { depth: null });
  } catch (error) {
    console.error(error);
  }
}

getBudgets();
