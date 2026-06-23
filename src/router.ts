import { createRouter } from "sv-router";
import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";

export const { p, navigate, isActive, route } = createRouter({
  "/": Home,
  "/about": About,
});
