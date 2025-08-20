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
                element={<Layout>{Page && <Page />}</Layout>}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
