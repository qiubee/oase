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

const allPostStatus = [
  "In afwachting",
  "Niet behaald",
  "Ter discussie",
  "Besproken in vergadering",
  "In behandeling",
  "In uitvoering",
  "Compleet"
] as const;

export type Subjects = typeof allSubjects[number];
export type StatusOptions = typeof allStatusOptions[number];
export type PostStatuses = typeof allPostStatus[number];

export type Lesson = {
  name: string;
  room: string;
  time: {
    start: string;
    end: string;
  };
  image: string;
};

export type Reaction = {
  userID: number;
  userType: "student" | "representative";
  timestamp: string;
  message: string;
};

export type Post = {
  id: number;
  type: string;
  author: number;
  title: string;
  description: string;
  timestamp: string;
  category: Subjects;
  upvotes: Array<User["id"]>;
  status: PostStatuses;
  reactions: Reaction[];
};

export type Route = {
  name: string;
  location: string;
  iconUrl: string;
  iconAlt: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  lastNameVisible: boolean;
  photoURL: string;
  status: {
    text: StatusOptions;
    visible: boolean;
  };
  readonly study: {
    name: string;
    abbreviation: string;
  };
  readonly lessons: Array<Lesson>;
};

export type Theme = {
  name: string;
  nameVisible: boolean;
  thumbnail: string;
  backgroundColor: string;
};

export type FormError = {
  title: boolean;
  details: boolean;
};

export type FormData = {
  title: Post["title"];
  category: Subjects;
  details: Post["description"]
}