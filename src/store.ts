import { readable, writable } from "svelte/store";
import type { Theme, NewsPost, Sorted, Category } from "src/@types/main";
import { allStatusOptions } from "./@types/main";
import allStudents from "./db/students.json";
import allRepresentatives from "./db/representatives.json";
import allPosts from "./db/posts.json";
import allRoutes from "./db/routes.json";
import allThemes from "./db/themes.json";
import allNews from "./db/news.json";
import allCategories from "./db/categories.json";
import allPostStatus from "./db/post-status.json";

// test
export const loggedIn = writable<boolean>(true);
export const onboard = writable<boolean>(false);

// export const loggedIn = writable<boolean>(false);
// export const onboard = writable<boolean>(true);

export const currentTheme = writable<string>("Oase");
export const categories = writable(<Category[]>allCategories);
export const statusOptions = readable(allStatusOptions);
export const userID = readable<number>(0);
export const currentCategory = writable<string>("Alles");
export const routes = readable(allRoutes);
export const themes = readable<Theme[]>(allThemes);
export const students = writable(allStudents);
export const posts = writable(allPosts);
export const representatives = writable(allRepresentatives);
export const news = readable<NewsPost[]>(allNews);
export const sorted = writable<Sorted>({ posts: [], comments: [] });
export const statuses = readable(allPostStatus);
