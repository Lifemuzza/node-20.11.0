import { BASE_URL, API_ENDPOINTS } from "@/config/apiConfig";

const CART_ITEMS_API_URL = `${BASE_URL}${API_ENDPOINTS.fetchCartItems}`;

export async function fetchCartItems() {
  try {
    const response = await fetch(CART_ITEMS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch carts-items");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart-items:", error);
  }
}
