interface DashboardChildren {
  overview: string;
  blogs: string;
  about: string;
}

interface Routes {
  home: string;
  upload: string;
  uploadDelete: string;
  dashboard: string;
  dashboardRoot: string;
  dashboardBlogs: string;
  dashboardAbout: string;
  dashboardChildren: DashboardChildren;
}

const routes: Routes = {
  home: "/",
  upload: "/upload", // create Blog
  uploadDelete: "/upload/:id", // delete Blog

  // Dashboard
  dashboard: "/dashboard/*", // dùng cho Route cha
  dashboardRoot: "/dashboard",
  dashboardBlogs: "/dashboard/blogs",
  dashboardAbout: "/dashboard/about-us",
  dashboardChildren: {
    overview: "",
    blogs: "blogs",
    about: "about-us",
  },
};

export default routes;
