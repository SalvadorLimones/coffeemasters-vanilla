import API from "./API.js";

export async function loadData() {
  API.fetchMenu();
  app.Store.menu = await API.fetchMenu();
}
