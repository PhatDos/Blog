import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "~/components/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// đảm bảo root element tồn tại
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found. Did you forget <div id='root' /> in index.html?");
}

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </QueryClientProvider>
  // </React.StrictMode>
);

reportWebVitals();
