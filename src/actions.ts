import {
  Category,
  Post,
  SortComments,
  Sorted,
  SortPosts,
  SortTypes,
  Student,
} from "./@types/main";
import { get } from "svelte/store";
import {
  categories,
  students,
  sorted,
  posts,
  statusOptions,
  userID,
} from "./store";

const categoriesItems = get(categories);
const studentsItems = get(students);
const postItems = get(posts);
const statusOptionsItems = get(statusOptions);
const UID = get(userID);

export function updateStatus(option: Student["status"]["text"]): void {
  const index = statusOptionsItems.indexOf(option);
  students.update(function (students) {
    students[UID].status.text = statusOptionsItems[index];
    return students;
  });
}

export function uploadImage(e: Event): void {
  const el = <HTMLInputElement>e.target;
  const files: FileList = el.files;
  students.update(function (students) {
    students[UID].photoURL = URL.createObjectURL(files[0]);
    return students;
  });
}

export function toggleLastName(): void {
  const user = studentsItems.find((user) => user.id === UID);
  const visibility = user.lastNameVisible;
  students.update(function (students) {
    students[UID].lastNameVisible = !visibility ? true : false;
    return students;
  });
}

export function toggleOnlineStatus(): void {
  const user = studentsItems.find((user) => user.id === UID);
  const visibility = user.status.visible;
  students.update(function (students) {
    students[UID].status.visible = !visibility ? true : false;
    return students;
  });
}

export function follow(category: Category, userID: number): void {
  const user = studentsItems.find((user) => user.id === userID);
  if (
    category.followers.includes(userID) &&
    user.following.categories.includes(category.id)
  ) {
    // unfollow
    const followers = categoriesItems.find(function (item) {
      return item.id === category.id;
    }).followers;
    const followedCategories = studentsItems.find(function (student) {
      return student.id === userID;
    }).following.categories;

    categories.update(function (categories) {
      categories.find(function (item) {
        return item.id === category.id;
      }).followers = followers.filter(function (id) {
        return id !== userID;
      });
      return categories;
    });

    students.update(function (students) {
      students.find(function (student) {
        return student.id === userID;
      }).following.categories = followedCategories.filter(function (id) {
        return id !== category.id;
      });
      return students;
    });
  } else {
    // follow
    categories.update(function (categories) {
      categories
        .find(function (item) {
          return item.id === category.id;
        })
        .followers.push(userID);
      return categories;
    });

    students.update(function (students) {
      students
        .find(function (student) {
          return student.id === userID;
        })
        .following.categories.push(category.id);
      return students;
    });
  }
}

export function sort(
  type: SortTypes,
  option: SortComments | SortPosts,
  post?: Post
): void {
  if (type === "posts") {
    if (option === SortPosts.NEW) {
      sorted.update(function (sorted) {
        sorted.posts = <Sorted["posts"]>postItems.sort(function (a, b) {
          if (a.timestamp < b.timestamp) {
            return 1;
          } else if (a.timestamp > b.timestamp) {
            return -1;
          } else {
            return 0;
          }
        });
        return sorted;
      });
    }
    if (option === SortPosts.TRENDING) {
      sorted.update(function (sorted) {
        sorted.posts = <Sorted["posts"]>postItems.sort(function (a, b) {
          if (
            a.upvotes.length < b.upvotes.length ||
            (a.comments.length < b.comments.length && a.timestamp < b.timestamp)
          ) {
            return 1;
          } else if (
            a.upvotes.length > b.upvotes.length ||
            (a.comments.length > b.comments.length && a.timestamp > b.timestamp)
          ) {
            return -1;
          } else {
            return 0;
          }
        });
        return sorted;
      });
    }
    if (option === SortPosts.TOP) {
      sorted.update(function (sorted) {
        sorted.posts = <Sorted["posts"]>postItems.sort(function (a, b) {
          if (a.upvotes.length < b.upvotes.length) {
            return 1;
          } else if (a.upvotes.length > b.upvotes.length) {
            return -1;
          } else {
            0;
          }
        });
        return sorted;
      });
    }
  } else if (type === "comments" && post) {
    if (option === SortComments.NEW) {
      sorted.update(function (sorted) {
        sorted.comments = post.comments.sort(function (a, b) {
          if (parseInt(a.timestamp) < parseInt(b.timestamp)) {
            return 1;
          } else if (parseInt(a.timestamp) > parseInt(b.timestamp)) {
            return -1;
          } else {
            return 0;
          }
        });
        return sorted;
      });
    } else {
      sorted.update(function (sorted) {
        sorted.comments = post.comments.sort(function (a, b) {
          if (parseInt(a.timestamp) > parseInt(b.timestamp)) {
            return 1;
          } else if (parseInt(a.timestamp) < parseInt(b.timestamp)) {
            return -1;
          } else {
            return 0;
          }
        });
        return sorted;
      });
    }
  }
}
