import { readable, writable } from "svelte/store";

type User = {
  firstName: string,
  lastName: string,
  lastNameVisible: boolean,
  photoURL: string,
  status: string,
  statusVisible: boolean,
  programmOfStudy: string,
  posAbbreviation: string
}

// test
export const loggedIn = writable<boolean>(true);
export const onboard = writable<boolean>(true);

// export const loggedIn = writable<boolean>(false);
// export const onboard = writable<boolean>(true);
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
export const interestedSubjects = writable<string[]>([]);
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
});
