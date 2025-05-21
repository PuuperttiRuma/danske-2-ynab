import axios from "axios";
import "dotenv/config";
import { Budget } from "./types.js";

const baseURL = "https://api.ynab.com/v1/";
const token = process.env.AUTH_TOKEN;

async function getBudgets(): Promise<Budget[] | undefined> {
  try {
    const response = await axios.get(`${baseURL}/budgets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data.budgets;
  } catch (error) {
    console.error(error);
  }
}

const budgets: Budget[] | undefined = await getBudgets();
if (budgets) {
  const omaBudget = budgets.find((budget) => budget.name === "Tommin Oma");
  console.log(budgets);
  console.log(omaBudget);
}
