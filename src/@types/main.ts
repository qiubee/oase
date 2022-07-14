export const allCategories = [
  "studiedruk",
  "studiebegeleiding",
  "communicatie",
  "diversiteit",
  "studievereniging",
  "informatievoorziening",
  "studieplekken",
  "evenementen",
  "studieadvies",
  "online",
] as const;

export const allStatusOptions = [
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
  "Compleet",
] as const;

const allRouteNames = [
  "home",
  "forum",
  "search",
  "notifications",
  "profile",
] as const;

export type Categories = typeof allCategories[number];
export type StatusOptions = typeof allStatusOptions[number];
export type PostStatuses = typeof allPostStatus[number];
export type RouteNames = typeof allRouteNames[number];

export type Lesson = {
  name: string;
  room: string;
  time: {
    start: string;
    end: string;
  };
  image: string;
};

export type Comment = {
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
  category: Categories;
  upvotes: Array<User["id"]>;
  status: PostStatuses;
  comments: Comment[];
};

export type Route = {
  name: RouteNames;
  location: string;
  iconUrl: string;
  iconAlt: string;
};

export type User = {
  id: number;
  readonly firstName: string;
  readonly lastName: string;
  lastNameVisible: boolean;
  photoURL: string;
  status: {
    text: StatusOptions;
    visible: boolean;
  };
  following: {
    categories: Category["id"][];
    posts: Post["id"][];
  };
  readonly study: {
    name: string;
    abbreviation: string;
  };
};

export type Student = {
  readonly lessons: Array<Lesson>;
} & User;

export type Representative = {
  council: {
    type: "Opleidingscommissie" | "Faculteitsraad" | "Medezeggenschapsraad";
    study: string;
  };
} & User;

export type Theme = {
  name: string;
  nameVisible: boolean;
  thumbnail: string;
  backgroundColor: string;
};

export type Category = {
  id: number;
  name: Categories;
  followers: Array<User["id"]>;
};

export type FormError = {
  title: boolean;
  details: boolean;
};

export type FormData = {
  title: Post["title"];
  category: Categories;
  details: Post["description"];
};

export type NewsPost = {
  author: string;
  title: string;
  content: string;
  tag: string;
  timestamp: string;
};

export type Sorted = {
  posts: Post[];
  comments: Comment[];
};
