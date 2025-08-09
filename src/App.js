import "./App.css";
import TodoApp from "./TODO/index";
import { ThemeProvider } from "./ThemeContext.js";
import { StoreProvider } from "./store";
import Video from "./Video.js";
import { useEffect, useRef } from "react";
import Header from "./components/Heading";

function App() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <ThemeProvider>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
