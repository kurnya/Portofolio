import { fallbackPortfolioData } from "../data";

export async function getPortfolioData() {
  return { data: fallbackPortfolioData, source: "static" };
}
