import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";

window.app = {};
app.Store = Store;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
});
