import { Fragment } from "react";
import { ThemeProvider } from "./ThemeContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layouts/index.js";
import "~/App.css";

import blogs from "./data/blogs.js"; // Assuming you have a data file with blog posts

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, i) => {
            let Layout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } else {
              Layout = DefaultLayout;
            }

            const Page = route.component;
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page data={blogs} />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
