import { readable, writable } from "svelte/store";

// test
export const loggedIn = writable(true);
export const onboard = writable(true);

// export const loggedIn = writable(false);
// export const onboard = writable(true);
export const theme = writable("Oase");
export const subjects = readable([
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
export const interestedSubjects = writable([])
