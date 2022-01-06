import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const APOD_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "6A0tZQBiVWL7Tgahg0FxdeTB6DSUf6cMcy5QxMRy";

  const [pictures, setPictures] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const getPicturesRequest = useCallback (async () => {
    const url = `${APOD_URL}?api_key=${API_KEY}&count=9`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setPictures(pictures => [...pictures, ...responseJson]);
      setLoaded(!loaded);
    } else {
      console.log('error');
    }
  }, [loaded]);

  useEffect(() => {
    getPicturesRequest();
  }, [getPicturesRequest]);

  console.log(pictures);

  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage pictures={pictures} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
