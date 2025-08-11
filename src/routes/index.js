import Home from "~/pages/Home/index.js";
import Profile from "~/pages/Profile/index.js";
import Upload from "~/pages/Upload/index.js";
import Search from "~/pages/Search/index.js";
import { HeaderOnly } from "~/components/Layouts";

const publicRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly
  },
  {
    path: "/search",
    component: Search,
    layout: null
  }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
