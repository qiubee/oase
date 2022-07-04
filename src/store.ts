import { readable, writable } from "svelte/store";
import allStudents from "./assets/db/students.json";
import allPosts from "./assets/db/posts.json";

type Lesson = {
  name: string;
  room: string;
  time: {
    start: string;
    end: string;
  };
  image: string;
};

type Reaction = {
  userID: number;
  userType: string;
  timestamp: string;
  message: string;
};

type Post = {
  id: number;
  type: string;
  author: number;
  title: string;
  description: string;
  timestamp: string;
  category: string;
  upvotes: number;
  status: string;
  reactions: Reaction[];
};

type Route = {
  name: string;
  location: string;
  iconUrl: string;
  iconAlt: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  lastNameVisible: boolean;
  photoURL: string;
  status: {
    text: string;
    visible: boolean;
  };
  readonly study: {
    name: string;
    abbreviation: string;
  };
  readonly lessons: Array<Lesson>;
};

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
export const theme = writable<string>("Oase");
export const subjects = readable<string[]>([
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
]);
export const statusOptions = readable<string[]>([
  "Online",
  "Bezig",
  "Aan het werk",
  "Niet storen",
]);
export const user = writable<User>({
  id: allStudents.length + 1,
  firstName: "Jaimy",
  lastName: "Vaals",
  lastNameVisible: true,
  photoURL: "",
  status: {
    text: "Online",
    visible: true,
  },
  study: {
    name: "Communication & Multimedia Design",
    abbreviation: "CMD",
  },
  lessons: [
    {
      name: "Vormgeving",
      room: "TTH 02B09",
      time: {
        start: "9:00",
        end: "10:30",
      },
      image: "",
    },
  ],
});
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
    location: "/zoeken",
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
export const students = readable<User[]>(allStudents);
export const posts = writable<Post[]>(allPosts);
