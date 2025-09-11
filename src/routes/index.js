import config from "~/config";
import Home from "~/pages/Home/index.js";
import CreateEditBlogForm from "~/pages/CreateEditBlogForm";
import { UploadLayout, DashboardLayout } from "~/layouts";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home
  },
  {
    path: config.routes.upload, // create blog
    component: CreateEditBlogForm,
    layout: UploadLayout
  },
  {
    path: config.routes.uploadDelete, // edit blog
    component: CreateEditBlogForm,
    layout: UploadLayout
  },
  {
    path: config.routes.dashboard,
    layout: DashboardLayout
  }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
