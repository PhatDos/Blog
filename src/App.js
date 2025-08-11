import { Fragment } from "react";
import { ThemeProvider } from "./ThemeContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layouts/index.js";
import "~/App.css";

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
                    <Page
                      image="https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png"
                      title="Sim Data 4G Viettel Giá Rẻ SD70 30Gb/Tháng"
                      price="170.000"
                      oldPrice="250.000"
                      sold="13"
                      location="TP. Hồ Chí Minh"
                      shipping="2 - 4 ngày"
                    />
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
