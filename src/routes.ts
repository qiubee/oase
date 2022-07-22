import Forum from "./routes/Forum.svelte";
import Home from "./routes/Home.svelte";
import Login from "./routes/Login.svelte";
import NotFound from "./routes/NotFound.svelte";
import Notifications from "./routes/Notifications.svelte";
import Profile from "./routes/Profile.svelte";
import Search from "./routes/Search.svelte";
import CreatePost from "./routes/CreatePost.svelte";
import Post from "./routes/Post.svelte";
import Category from "./routes/Category.svelte";
import Setup from "./routes/Setup.svelte";
import Test from "./routes/Test.svelte";

export default {
  "/": Home,
  "/forum": Forum,
  "/zoek": Search,
  "/meldingen": Notifications,
  "/profiel": Profile,
  "/login": Login,
  "/account-instellen": Setup,
  "/post-aanmaken": CreatePost,
  "/test": Test,

  "/post/:id": Post,
  "/categorie/:category": Category,

  "*": NotFound,
};
