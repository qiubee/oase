import { readable, writable } from "svelte/store";

type Lesson = {
  name: string;
  room: string;
  time: {
    start: string;
    end: string;
  };
  image: string;
};

type Route = {
  name: string;
  iconUrl: string;
};

type User = {
  firstName: string;
  lastName: string;
  lastNameVisible: boolean;
  photoURL: string;
  status: string;
  statusVisible: boolean;
  readonly programmOfStudy: string;
  readonly posAbbreviation: string;
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
  firstName: "Jaimy",
  lastName: "Vaals",
  lastNameVisible: true,
  photoURL: "",
  status: "Online",
  statusVisible: true,
  programmOfStudy: "Communication & Multimedia Design",
  posAbbreviation: "CMD",
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
    name: "Home",
    iconUrl: "src/assets/routes/house.png",
  },
  {
    name: "Forum",
    iconUrl: "src/assets/routes/chat.png",
  },
  {
    name: "Search",
    iconUrl: "src/assets/routes/search.png",
  },
  {
    name: "Notifications",
    iconUrl: "src/assets/routes/alert.png",
  },
  {
    name: "Profile",
    iconUrl: "src/assets/routes/cthulhu.png",
  },
]);
