import type { Category } from "./@types/main";
import { get } from "svelte/store";
import { categories, students } from "./store";

const categoriesItems = get(categories);
const studentsItems = get(students);

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
