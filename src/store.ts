import { readable, writable } from "svelte/store";
import type {
  User,
  Subjects,
  StatusOptions,
  Route,
  Post,
  Theme,
} from "src/@types/main";
import allStudents from "./db/students.json";
import allPosts from "./db/posts.json";

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
export const interestedSubjects = writable<string[]>([
  "informatievoorziening",
  "studiedruk",
  "communicatie",
]);

// export const loggedIn = writable<boolean>(false);
// export const onboard = writable<boolean>(true);
// export const interestedSubjects = writable<string[]>([]);
export const currentTheme = writable<string>("Oase");
export const subjects = readable<readonly Subjects[]>(allSubjects);
export const statusOptions = readable<readonly StatusOptions[]>(allStatusOptions);
export const userID = readable<User["id"]>(0);
export const currentCategory = writable<string>("Alles");
export const routes = readable<Route[]>([
  {
    name: "home",
    location: "/",
    iconUrl: "src/assets/routes/house.png",
    iconAlt: "Home",
  },
  {
    name: "forum",
    location: "/forum",
    iconUrl: "src/assets/routes/chat.png",
    iconAlt: "Forum",
  },
  {
    name: "search",
    location: "/zoek",
    iconUrl: "src/assets/routes/search.png",
    iconAlt: "Zoek",
  },
  {
    name: "notifications",
    location: "/meldingen",
    iconUrl: "src/assets/routes/alert.png",
    iconAlt: "Meldingen",
  },
  {
    name: "profile",
    location: "/profiel",
    iconUrl: "src/assets/routes/cthulhu.png",
    iconAlt: "Profiel",
  },
]);
export const themes = readable<Theme[]>([
  {
      name: "Oase",
      nameVisible: true,
      thumbnail: "src/assets/themes/palms.svg",
      backgroundColor: "#FBF0BC"
  },
  {
      name: "Sterrennacht",
      nameVisible: true,
      thumbnail: "src/assets/themes/stars.svg",
      backgroundColor: "#37333B"
  },
  {
      name: "CMD",
      nameVisible: false,
      thumbnail: "src/assets/themes/cmd.png",
      backgroundColor: "#FFF021"
  },
  {
      name: "CO-CB",
      nameVisible: false,
      thumbnail: "src/assets/themes/cocb.svg",
      backgroundColor: "white"
  },
  {
      name: "HBO-ICT",
      nameVisible: false,
      thumbnail: "src/assets/themes/hbo-ict.png",
      backgroundColor: "white"
  }
])

export const students = writable<User[]>(allStudents);
export const posts = writable<Post[]>(allPosts);
