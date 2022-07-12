import { readable, writable } from "svelte/store";
import type {
  Subjects,
  StatusOptions,
  Route,
  Post,
  Theme,
  Student,
  Representative,
} from "src/@types/main";
import allStudents from "./db/students.json";
import allRepresentatives from "./db/representatives.json";
import allPosts from "./db/posts.json";
import allRoutes from "./db/routes.json";
import allThemes from "./db/themes.json";

const allSubjects = [
  "studiedruk",
  "studiebegeleiding",
  "communicatie",
  "diversiteit",
  "studentenvereniging",
  "informatievoorziening",
  "studieplekken",
  "evenementen",
  "studieadvies",
  "online",
] as const;

const allStatusOptions = [
  "Online",
  "Bezig",
  "Aan het werk",
  "Niet storen",
] as const;

// test
export const loggedIn = writable<boolean>(true);
export const onboard = writable<boolean>(false);

// export const loggedIn = writable<boolean>(false);
// export const onboard = writable<boolean>(true);
export const currentTheme = writable<string>("Oase");
export const subjects = readable<readonly Subjects[]>(allSubjects);
export const statusOptions =
  readable<readonly StatusOptions[]>(allStatusOptions);
export const userID = readable<number>(0);
export const currentCategory = writable<string>("Alles");
export const routes = readable<Route[]>(allRoutes);
export const themes = readable<Theme[]>(allThemes);
export const students = writable<Student[]>(allStudents);
export const posts = writable<Post[]>(allPosts);
export const representatives = writable<Representative[]>(allRepresentatives);
