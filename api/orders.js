import { BASE_URL, API_ENDPOINTS } from "@/config/apiConfig";

const SUBMIT_ORDER_API_URL = `${BASE_URL}${API_ENDPOINTS.submitOrder}`;

export async function submitOrderAPI(cartItems) {
  try {
    const response = await fetch(SUBMIT_ORDER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting order:", error);
  }
}
