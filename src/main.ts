// import "./global.css";
import App from "./App.svelte";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
