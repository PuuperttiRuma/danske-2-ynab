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

async function getTransactions(id: string, sinceDate: string) {
  //const dateString = sinceDate.toISOString().split("T")[0];
  try {
    const response = await axios.get(
      `${baseURL}/budgets/${id}/transactions?since_date=${sinceDate}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data.transactions;
  } catch (error) {
    console.error(error);
  }
}

const budgets: Budget[] | undefined = await getBudgets();
if (budgets) {
  const omaBudget = budgets.find((budget) => budget.name === "Tommin Oma");
  console.log(omaBudget);
  if (omaBudget) {
    const transactions = await getTransactions(omaBudget?.id, "2025-05-15");
    console.log(transactions);
  }
}
