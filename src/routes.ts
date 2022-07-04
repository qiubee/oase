import Forum from "./routes/Forum.svelte";
import Home from "./routes/Home.svelte";
import Login from "./routes/Login.svelte";
import NotFound from "./routes/NotFound.svelte";
import Notifications from "./routes/Notifications.svelte";
import Profile from "./routes/Profile.svelte";
import Search from "./routes/Search.svelte";
import Post from "./lib/components/Post.svelte";
import Setup from "./routes/Setup.svelte";

export default {
  "/": Home,
  "/forum": Forum,
  "/zoek": Search,
  "/meldingen": Notifications,
  "/profiel": Profile,
  "/login": Login,
  "/account-instellen": Setup,

  "/post/:id": Post,

  "*": NotFound,
};
