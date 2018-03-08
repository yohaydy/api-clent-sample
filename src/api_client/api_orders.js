import makeApi from "api_base";

const ordersApi = makeApi("https://sampleapi.com/", true);

export const getOrders = ordersApi("orders/", "GET");
