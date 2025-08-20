import Home from "~/pages/Home/index.js";
import CreateEditBlogForm from "~/pages/CreateEditBlogForm";
import { UploadLayout, DashboardLayout } from "~/components/Layouts";

const publicRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/upload", // create blog
    component: CreateEditBlogForm,
    layout: UploadLayout
  },
  {
    path: "/upload/:id", // edit blog
    component: CreateEditBlogForm,
    layout: UploadLayout
  },
  {
    path: "/dashboard/*",
    layout: DashboardLayout
  }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
