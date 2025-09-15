import config from "~/config";
import Home from "~/pages/Home";
import CreateEditBlogForm from "~/pages/CreateEditBlogForm";
import { UploadLayout, DashboardLayout } from "~/layouts";
import { ComponentType } from "react";

type AppRoute = {
  path: string;
  component?: ComponentType<any>;
  layout?: ComponentType<any> | null;
};

const publicRoutes: AppRoute[] = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.upload, // create blog
    component: CreateEditBlogForm,
    layout: UploadLayout,
  },
  {
    path: config.routes.uploadDelete, // edit blog
    component: CreateEditBlogForm,
    layout: UploadLayout,
  },
  {
    path: config.routes.dashboard,
    layout: DashboardLayout,
  },
];

const privateRoutes: AppRoute[] = [];

export { publicRoutes, privateRoutes };
