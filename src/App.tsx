import { useState } from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import FeedPage from "./components/FeedPage/FeedPage";
import PictureDetailsPage from "./components/PictureDetailsPage/PictureDetailsPage";

import styles from "./App.module.scss";
import HubbleDetailsPage from "./components/HubbleDetailsPage/HubbleDetailsPage";

export default function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    lightTheme ? "white" : "#050505"
  );
  root.style.setProperty("--text-color", lightTheme ? "black" : "white");

  const landingPage = (
    <LandingPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const feedPage = (
    <FeedPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const pictureDetailsPage = (
    <PictureDetailsPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const hubbleDetailsPage = (
    <HubbleDetailsPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );

  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Routes>
          <Route path="/" element={landingPage} />
          <Route path="/feed" element={feedPage} />
          <Route path="/feed/:id" element={pictureDetailsPage} />
          <Route path="/hubble/:id" element={hubbleDetailsPage} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
