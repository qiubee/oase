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

export const allPostStatus = [
  "discussie",
  "besproken in raad",
  "plannen",
  "uitvoeren",
  "klaar",
  "verlopen",
] as const;

const allRouteNames = [
  "home",
  "forum",
  "search",
  "notifications",
  "profile",
] as const;

const types = ["posts", "comments"] as const;

export type Categories = typeof allCategories[number];
export type StatusOptions = typeof allStatusOptions[number];
export type PostStatuses = typeof allPostStatus[number];
export type RouteNames = typeof allRouteNames[number];
export type SortTypes = typeof types[number];

export enum PostStatus {
  DISCUSSION,
  INMEETING,
  PROCESSING,
  EXECUTING,
  COMPLETE,
  DISMISSED,
}

export enum SortComments {
  NEW,
  OLD,
}

export enum SortPosts {
  NEW,
  TRENDING,
  TOP,
}

export type Status = {
  id: number;
  name: PostStatuses;
  iconURL: string;
};

export type Lesson = {
  name: string;
  room: string;
  time: {
    start: string;
    end: string;
  };
  image: string;
};

export type Grade = {
  grade: number;
  date: string;
  course: string;
  points: number;
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
  status: Status["id"];
  comments: Comment[];
};

export type Route = {
  name: RouteNames;
  location: string;
  iconURL: string;
  iconAlt: string;
};

export type User = {
  id: number;
  type: "student" | "representative";
  readonly firstName: string;
  readonly lastName: string;
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
  type: "student";
  lastNameVisible: boolean;
  readonly lessons: Array<Lesson>;
  readonly grades: Array<Grade>;
} & User;

export type Representative = {
  type: "representative";
  council: {
    type: "Opleidingscommissie" | "Faculteitsraad" | "Medezeggenschapsraad";
    department: string;
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
